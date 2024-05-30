Component({
  data: {
    basic: false,
    top: false,
    right: false,
    bottom: false,
    left: false,
    round: false,
    close: false,
  },

  methods: {
    onClickBasicOpen() {
      this.setData({ basic: true });
    },

    onClickBasicClose() {
      this.setData({ basic: false });
    },

    onClickTopOpen() {
      this.setData({ top: true });
    },

    onClickTopClose() {
      this.setData({ top: false });
    },

    onClickRightOpen() {
      this.setData({ right: true });
    },

    onClickRightClose() {
      this.setData({ right: false });
    },

    onClickBottomOpen() {
      this.setData({ bottom: true });
    },

    onClickBottomClose() {
      this.setData({ bottom: false });
    },

    onClickLeftOpen() {
      this.setData({ left: true });
    },

    onClickLeftClose() {
      this.setData({ left: false });
    },

    onClickRoundOpen() {
      this.setData({ round: true });
    },

    onClickRoundClose() {
      this.setData({ round: false });
    },

    onClickCloseOpen() {
      this.setData({ close: true });
    },

    onClickCloseClose() {
      this.setData({ close: false });
    },
  },
});
