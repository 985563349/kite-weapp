import KComponent from '../shared/component';
import { getBoundingClientRect } from '../shared/utils';
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

    close() {
      this.children?.forEach((child) => {
        child.toggle(false);
      });
    },

    onTap(event: WechatMiniprogram.TouchEvent) {
      const { active } = event.currentTarget.dataset;

      const children = this.children;
      const current = children?.[active];

      if (!current || current.data.disabled) {
        return;
      }

      children.forEach((child, index) => {
        if (index === active) {
          child.toggle();
        } else {
          child.toggle(false, { immediate: true });
        }
      });
    },

    noop() {},
  },
});
