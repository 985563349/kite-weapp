Component({
  data: {
    gap: 'small',
  },

  methods: {
    changeGap(e: WechatMiniprogram.TouchEvent) {
      this.setData({ gap: e.currentTarget.dataset.gap });
    },
  },
});
