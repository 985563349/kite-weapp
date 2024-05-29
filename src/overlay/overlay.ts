import KComponent from '../common/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

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

  behaviors: [transition('fade')],

  methods: {
    onTap() {
      this.triggerEvent('click', { visible: !this.data.visible });
    },

    noop() {},
  },
});
