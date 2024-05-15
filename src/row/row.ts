import KComponent from '../common/component';
import { ensureArray } from '../common/utils';

KComponent({
  properties: {
    kId: String,

    gutter: {
      type: Array,
      optionalTypes: [Number],
    },

    justify: String,

    align: String,

    wrap: {
      type: Boolean,
      value: true,
    },

    style: String,
  },

  relations: {
    '../col/col': {
      type: 'child',
      linked(target) {
        const [gutter] = ensureArray(this.data.gutter);

        if (gutter) {
          target.setData({ gutter });
        }
      },
    },
  },
});
