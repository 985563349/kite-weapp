import KComponent from '../common/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    visible: Boolean,

    zIndex: {
      type: Number,
      value: 11000,
    },

    overlay: {
      type: Boolean,
      value: true,
    },

    title: String,

    subTitle: String,

    options: {
      type: Array,
      value: [],
    },

    cancelText: String,

    overlayClosable: {
      type: Boolean,
      value: true,
    },
  },

  methods: {
    onSelect(event: WechatMiniprogram.TouchEvent) {
      const { index } = event.currentTarget.dataset;
      const { options } = this.data;
      const item = options[index];

      if (item) {
        this.triggerEvent('selected', { selected: item, index });
      }
    },

    onCancel() {
      this.triggerEvent('cancel');
      this.triggerEvent('close');
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    },
  },
});
