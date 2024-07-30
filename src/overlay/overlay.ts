import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

    lockScroll: {
      type: Boolean,
      value: true,
    },

    zIndex: {
      type: Number,
      value: 11000,
    },

    ariaRole: String,

    ariaLabel: String,
  },

  behaviors: [transition({ transition: 'fade' })],

  methods: {
    onTap() {
      if (this.data.visible) {
        this.triggerEvent('click');
      }
    },

    noop() {},
  },
});
