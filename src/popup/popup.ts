import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    placement: {
      type: String,
      value: 'center',
      observer: 'observePlacement',
    },

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    overlayStyle: String,

    shape: String,

    closable: Boolean,

    safeArea: {
      type: Boolean,
      value: true,
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

  behaviors: [transition()],

  lifetimes: {
    created() {
      this.observePlacement();
    },
  },

  methods: {
    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    },

    onClose() {
      if (this.data.visible) {
        this.triggerEvent('close');
      }
    },

    observePlacement() {
      this.setData({ name: this.data.placement });
    },

    noop() {},
  },
});