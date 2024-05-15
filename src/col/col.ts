import KComponent from '../common/component';

KComponent({
  properties: {
    kId: String,

    span: Number,

    offset: Number,

    style: String,
  },

  relations: {
    '../row/row': {
      type: 'parent',
    },
  },
});
