import KComponent from '../shared/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    size: {
      type: String,
      optionalTypes: [Number, Array],
    },

    align: String,

    vertical: Boolean,

    wrap: Boolean,
  },
});
