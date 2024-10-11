import KComponent from '../shared/component';
import { getBoundingClientRect } from '../shared/native';
import relation from '../mixins/relation';

KComponent({
  behaviors: [
    relation({
      path: '../dropdown-item/dropdown-item',
      type: 'child',
      effect() {
        this.extract();
      },
    }),
  ],

  properties: {
    direction: {
      type: String,
      value: 'down',
      observer: 'notify',
    },

    shape: {
      type: String,
      observer: 'notify',
    },

    overlay: {
      type: Boolean,
      value: true,
      observer: 'notify',
    },

    overlayClosable: {
      type: Boolean,
      value: true,
      observer: 'notify',
    },

    overlayStyle: {
      type: String,
      observer: 'notify',
    },

    duration: {
      type: Object,
      optionalTypes: [Number],
      value: { enter: 300, leave: 300 },
      observer: 'notify',
    },

    zIndex: {
      type: Number,
      value: 11000,
      observer: 'notify',
    },
  },

  data: {
    items: [] as Record<string, unknown>[],
  },

  methods: {
    notify() {
      this.children?.forEach((child) => child.extract());
    },

    extract() {
      this.setData({
        items: this.children?.map((child) => child.data),
      });
    },

    getClientRect() {
      return getBoundingClientRect(this, '.k-dropdown-menu');
    },

    toggle(activeKey: string | number, visible?: boolean, options?: { immediate?: boolean }) {
      const children = this.children;
      const target = children?.find((child, index) => child.data.key === activeKey || index === activeKey);

      if (!target || target.data.disabled) {
        return;
      }

      children?.forEach((child, index) => {
        if (child.data.key === activeKey || index === activeKey) {
          child.toggle(visible, options);
        } else {
          child.toggle(false, { immediate: true });
        }
      });
    },

    onTap(event: WechatMiniprogram.TouchEvent) {
      this.toggle(event.currentTarget.dataset.key);
    },

    open(activeKey: string | number, immediate?: boolean) {
      this.toggle(activeKey, true, { immediate });
    },

    close(immediate?: boolean) {
      this.children?.forEach((child) => {
        child.toggle(false, { immediate });
      });
    },

    noop() {},
  },
});
