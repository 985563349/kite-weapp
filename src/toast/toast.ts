import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

    type: String,

    message: String,

    position: String,

    stay: {
      type: Number,
      value: 2000,
    },

    overlay: Boolean,

    duration: {
      type: Object,
      optionalTypes: [Number],
      value: { enter: 300, leave: 300 },
    },

    selector: String,

    context: Object,

    zIndex: {
      type: Number,
      value: 11000,
    },
  },

  behaviors: [transition({ visibleProperty: 'open', name: 'fade' })],

  data: {
    iconMap: {
      success: 'check-circle',
      warning: 'error-circle',
      error: 'close-circle',
    },
  },

  methods: {
    noop() {},
  },
});
