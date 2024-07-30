import KComponent from '../shared/component';

KComponent({
  properties: {
    visible: Boolean,

    options: {
      type: Array,
      value: [],
    },

    title: String,

    cancelText: String,

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    overlayStyle: String,

    duration: {
      type: Object,
      optionalTypes: [Number],
      value: { enter: 300, leave: 300 },
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },

    rootPortal: Boolean,

    zIndex: {
      type: Number,
      value: 11000,
    },
  },

  methods: {
    onSelect(event: WechatMiniprogram.TouchEvent) {
      const { index } = event.currentTarget.dataset;
      const { options } = this.data;
      const option = options[index];

      if (option.disabled || !this.data.visible) {
        return;
      }

      this.triggerEvent('select', { option, index });
    },

    onCancel() {
      if (this.data.visible) {
        this.triggerEvent('cancel');
      }
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.triggerEvent('cancel');
      }
    },
  },
});
