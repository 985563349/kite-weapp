import KComponent from '../shared/component';

type SwipeCellOpened = 'left' | 'right' | null;

let instances: WechatMiniprogram.Component.TrivialInstance[] = [];

KComponent({
  properties: {
    disabled: Boolean,
  },

  data: {
    opened: null as SwipeCellOpened,
  },

  lifetimes: {
    attached() {
      instances.push(this);
    },

    detached() {
      instances = instances.filter((instance) => instance !== this);
    },
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      if (!this.data.disabled) {
        this.close();
        this.triggerEvent('click', event);
      }
    },

    open(opened: Exclude<SwipeCellOpened, null>) {
      if (!this.data.disabled) {
        this.setData({ opened });
      }
    },

    close() {
      if (!this.data.disabled) {
        this.setData({ opened: null });
      }
    },

    closeOther() {
      instances.forEach((instance) => {
        if (instance !== this) {
          instance.close();
        }
      });
    },

    noop() {},
  },
});
