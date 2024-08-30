import KComponent from '../shared/component';
import { getSystemInfoSync, pick } from '../shared/utils';
import relation from '../mixins/relation';

KComponent({
  behaviors: [
    relation({
      path: '../dropdown-menu/dropdown-menu',
      type: 'parent',
      linked() {
        this.extract();
      },
    }),
  ],

  properties: {
    value: {
      type: null,
      observer: 'notify',
    },

    defaultValue: {
      type: null,
    },

    options: {
      type: Array,
      observer: 'notify',
    },

    disabled: Boolean,
  },

  data: {
    display: false,
    visible: false,
    immediate: false,
    clientRect: { top: 0, bottom: 0 },
    windowHeight: 0,
  },

  methods: {
    notify() {
      this.parent?.extract();
    },

    extract() {
      if (!this.parent) {
        return;
      }

      const properties = pick(this.parent.data, [
        'direction',
        'shape',
        'overlay',
        'overlayStyle',
        'overlayClosable',
        'duration',
        'zIndex',
      ]);

      this.setData(properties);
    },

    toggle(visible?: boolean, options?: { immediate: boolean }) {
      if (!this.parent || visible === this.data.visible) {
        return;
      }

      if (typeof visible !== 'boolean') {
        visible = !this.data.visible;
      }

      this.setData({ visible, immediate: !!options?.immediate });

      if (visible) {
        this.parent?.getClientRect().then((clientRect: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          const windowHeight = getSystemInfoSync().windowHeight;

          this.setData({ display: true, windowHeight, clientRect });
          this.triggerEvent('open');
          this.notify();
        });
      } else {
        this.triggerEvent('close');
        this.notify();
      }
    },

    onTap(event: WechatMiniprogram.TouchEvent) {
      const { index } = event.currentTarget.dataset;
      const option = this.data.options[index];
      const value = option.value;

      if (option.disabled || !this.data.visible) {
        return;
      }

      if (this.data.value == null) {
        this.setData({ defaultValue: value });
      }

      this.triggerEvent('select', { option, index });

      if (value !== this.data.value) {
        this.triggerEvent('change', { value });
      }

      this.toggle(false);
    },

    onAfterLeave() {
      this.setData({ display: false });
    },

    onClickCover() {
      this.toggle(false);
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');
    },

    noop() {},
  },
});
