Component({
  data: {
    visible: false,
    visibleEmbedded: false,
  },

  methods: {
    onClick() {
      this.setData({ visible: !this.data.visible });
    },

    onClickEmbedded() {
      this.setData({ visibleEmbedded: !this.data.visibleEmbedded });
    },

    noop() {},
  },
});
