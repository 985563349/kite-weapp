import KComponent from '../shared/component';
import { ensureArray } from '../shared/utils';

KComponent({
  properties: {
    kId: String,

    gutter: {
      type: Array,
      optionalTypes: [Number],
      observer: 'observerGutter',
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

  methods: {
    observerGutter() {
      const [gutter] = ensureArray(this.data.gutter);
      const children = this.getRelationNodes('../col/col');

      children.forEach((child) => {
        child.setData({ gutter });
      });
    },
  },
});
