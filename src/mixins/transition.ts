import { requestAnimationFrame, frameDuration } from '../shared/raf';
import { isObject } from '../shared/utils';

type DurationOption = {
  enter: number;
  leave: number;
};

type DataOption = {
  mounted: boolean;
  display: boolean;
  transitionDuration?: number;
  transitionClassNames: string;
};

type PropertyOption = {
  visible: {
    type: typeof Boolean;
    value?: boolean;
    observer?: string;
  };
  name: {
    type: typeof String;
    value?: string;
  };
  duration: {
    type: typeof Object;
    optionalTypes: [typeof Number];
    value?: DurationOption;
  };
};

type MethodOption = {
  observeVisible(value: boolean, oldValue: boolean): void;
  enter(): void;
  leave(): void;
  onTransitionEnd(): void;
};

type CustomInstanceProperty = {
  transitionEnded: boolean;
  enterTransitionPromise: Promise<void> | null;
  status: 'enter' | 'leave';
};

type TransitionOptions = {
  name?: string;
};

export default function transition(options: TransitionOptions = {}) {
  const { name = 'transition' } = options;

  return Behavior<DataOption, PropertyOption, MethodOption, CustomInstanceProperty>({
    properties: {
      visible: {
        type: Boolean,
        value: false,
        observer: 'observeVisible',
      },

      name: {
        type: String,
        value: name,
      },

      duration: {
        type: Object,
        optionalTypes: [Number],
        value: { enter: 300, leave: 300 },
      },
    },

    data: {
      mounted: false,
      display: false,
      transitionClassNames: '',
    },

    methods: {
      observeVisible(value: boolean, oldValue: boolean) {
        if (value !== oldValue) {
          value ? this.enter() : this.leave();
        }
      },

      enter() {
        if (this.enterTransitionPromise) return;

        this.enterTransitionPromise = new Promise((resolve) => {
          if (this.status === 'enter') return;

          const { duration, name } = this.data;
          const transitionDuration = isObject(duration) ? duration.enter : duration;

          this.status = 'enter';
          this.triggerEvent('before-enter');

          requestAnimationFrame(() => {
            if (this.status !== 'enter') return;

            this.triggerEvent('enter');
            this.setData({
              mounted: true,
              display: true,
              transitionDuration,
              transitionClassNames: `k-${name}-enter k-${name}-enter-active enter-class enter-active-class`,
            });

            requestAnimationFrame(() => {
              if (this.status !== 'enter') return;

              this.transitionEnded = false;
              this.setData({
                transitionClassNames: `k-${name}-enter-to k-${name}-enter-active enter-to-class enter-active-class`,
              });
              resolve();
            });
          });
        });
      },

      leave() {
        if (!this.enterTransitionPromise) return;

        this.enterTransitionPromise.then(() => {
          if (!this.data.display) return;

          const { duration, name } = this.data;
          const transitionDuration = isObject(duration) ? duration.leave : duration;

          this.status = 'leave';
          this.triggerEvent('before-leave');

          requestAnimationFrame(() => {
            if (this.status !== 'leave') return;

            this.triggerEvent('leave');
            this.setData({
              transitionDuration,
              transitionClassNames: `k-${name}-leave k-${name}-leave-active leave-class leave-active-class`,
            });

            requestAnimationFrame(() => {
              if (this.status !== 'leave') return;

              this.transitionEnded = false;
              this.enterTransitionPromise = null;
              this.setData({
                transitionClassNames: `k-${name}-leave-to k-${name}-leave-active leave-to-class leave-active-class`,
              });

              /**
               * prevent transitionend from failing to trigger.
               * delaying the two-frame event ensures that the timer executes after the transitionEnd event executes.
               */
              setTimeout(
                () => {
                  this.onTransitionEnd();
                },
                transitionDuration + frameDuration * 2
              );
            });
          });
        });
      },

      onTransitionEnd() {
        if (this.transitionEnded) return; // prevent transition property from causing the function to execute repeatedly.

        this.triggerEvent(`after-${this.status}`);
        this.transitionEnded = true;

        const { visible, display } = this.data;

        if (!visible && display) {
          this.setData({ display: false, transitionClassNames: '' });
        }
      },
    },
  });
}
