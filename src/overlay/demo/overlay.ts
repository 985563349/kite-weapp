Component({
  data: {
    open: false,
  },

  methods: {
    onClickOpen() {
      this.setData({ open: true });
    },

    onClickClose() {
      this.setData({ open: false });
    },

    noop() {},
  },
});
