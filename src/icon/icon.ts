import KComponent from '../common/component';

KComponent({
  properties: {
    kId: String,

    name: String,

    size: String,

    color: String,

    prefix: {
      type: String,
      value: 'k-icon',
    },

    style: String,
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      this.triggerEvent('click', event);
    },
  },
});
