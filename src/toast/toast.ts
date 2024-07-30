import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    type: String,

    content: String,

    icon: String,

    position: String,

    stay: {
      type: Number,
      value: 2000,
    },

    overlay: Boolean,

    selector: String,

    context: Object,

    zIndex: {
      type: Number,
      value: 11000,
    },
  },

  behaviors: [transition({ name: 'fade' })],

  data: {
    iconMap: {
      success: 'check-circle',
      warning: 'exclamation-circle',
      error: 'close-circle',
    },
  },

  methods: {
    noop() {},
  },
});
