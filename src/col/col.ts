import KComponent from '../shared/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    span: {
      type: null,
      optionalTypes: [Number],
    },

    offset: {
      type: null,
      optionalTypes: [Number],
    },

    push: {
      type: null,
      optionalTypes: [Number],
    },

    pull: {
      type: null,
      optionalTypes: [Number],
    },

    flex: {
      type: null,
      optionalTypes: [Number],
    },

    order: {
      type: null,
      optionalTypes: [Number],
    },

    xs: {
      type: null,
      optionalTypes: [Number, Object],
    },

    sm: {
      type: null,
      optionalTypes: [Number, Object],
    },

    md: {
      type: null,
      optionalTypes: [Number, Object],
    },

    lg: {
      type: null,
      optionalTypes: [Number, Object],
    },

    xl: {
      type: null,
      optionalTypes: [Number, Object],
    },
  },

  relations: {
    '../row/row': {
      type: 'parent',
    },
  },
});
