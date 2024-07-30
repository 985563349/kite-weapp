import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    lockScroll: {
      type: Boolean,
      value: true,
    },

    rootPortal: Boolean,

    zIndex: {
      type: Number,
      value: 11000,
    },

    ariaRole: String,

    ariaLabel: String,
  },

  behaviors: [transition({ name: 'fade' })],

  methods: {
    onTap() {
      if (this.data.visible) {
        this.triggerEvent('click');
      }
    },

    noop() {},
  },
});
