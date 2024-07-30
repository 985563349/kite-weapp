Component({
  data: {
    visible: false,
  },

  methods: {
    onClickOpen() {
      this.setData({ visible: true });
    },

    onClickClose() {
      this.setData({ visible: false });
    },

    noop() {},
  },
});
