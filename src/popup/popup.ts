import KComponent from '../common/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

    placement: {
      type: String,
      value: 'center',
      observer: 'observePlacement',
    },

    shape: String,

    zIndex: {
      type: Number,
      value: 11000,
    },

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    closable: Boolean,

    lockScroll: {
      type: Boolean,
      value: true,
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

    onClickClose() {
      this.triggerEvent('close');
    },

    observePlacement() {
      const { placement } = this.data;

      this.setData({ name: placement });
    },
  },
});
