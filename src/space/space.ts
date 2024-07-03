import KComponent from '../shared/component';

KComponent({
  properties: {
    size: {
      type: String,
      optionalTypes: [Number, Array],
    },

    align: String,

    vertical: Boolean,

    wrap: Boolean,
  },
});