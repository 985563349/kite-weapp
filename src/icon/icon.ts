import KComponent from '../shared/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    name: String,

    color: String,

    size: String,

    prefix: {
      type: String,
      value: 'k-icon',
    },
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      this.triggerEvent('click', event);
    },
  },
});
