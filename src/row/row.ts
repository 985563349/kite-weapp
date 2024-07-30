import KComponent from '../shared/component';
import relation from '../mixins/relation';
import { ensureArray } from '../shared/utils';

KComponent({
  behaviors: [
    relation({
      path: '../col/col',
      type: 'child',
      linked(target) {
        const [gutter] = ensureArray(this.data.gutter);

        if (gutter) {
          target.setData({ gutter });
        }
      },
    }),
  ],

  properties: {
    kId: String,

    gutter: {
      type: Array,
      optionalTypes: [Number, String],
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

  methods: {
    observerGutter() {
      const [gutter] = ensureArray(this.data.gutter);
      const children = this.children;

      children?.forEach((child) => {
        child.setData({ gutter });
      });
    },
  },
});
