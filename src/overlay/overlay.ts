import KComponent from '../common/component';

KComponent({
  properties: {
    kId: String,

    visible: Boolean,

    style: String,

    duration: {
      type: Number,
      value: 300,
    },

    zIndex: {
      type: Number,
      value: 11000,
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },

    ariaRole: String,

    ariaLabel: String,
  },

  methods: {
    onTap() {
      this.triggerEvent('click', { visible: !this.data.visible });
    },

    noop() {},
  },
});
