Component({
  data: {
    basic: false,
    color: false,
    state: false,
    title: false,
    basicOptions: [
      { label: 'Delete', value: 0 },
      { label: 'Share', value: 1 },
    ],
    colorOptions: [
      { label: 'Delete', value: 0, color: 'var(--k-danger-color)' },
      { label: 'Share', value: 1, color: 'var(--k-primary-color)' },
    ],
    stateOptions: [
      { label: 'Delete', value: 0, color: 'var(--k-danger-color)', disabled: true },
      { label: 'Share', value: 1, color: 'var(--k-primary-color)' },
    ],
    titleOptions: [
      { label: 'Delete', value: 0 },
      { label: 'Share', value: 1 },
    ],
  },

  methods: {
    onSelect(event: WechatMiniprogram.CustomEvent) {
      console.log(event.detail);
    },

    onClickBasicOpen() {
      this.setData({ basic: true });
    },

    onClickBasicCancel() {
      this.setData({ basic: false });
    },

    onClickColorOpen() {
      this.setData({ color: true });
    },

    onClickColorCancel() {
      this.setData({ color: false });
    },

    onClickStateOpen() {
      this.setData({ state: true });
    },

    onClickStateCancel() {
      this.setData({ state: false });
    },

    onClickTitleOpen() {
      this.setData({ title: true });
    },

    onClickTitleCancel() {
      this.setData({ title: false });
    },
  },
});
