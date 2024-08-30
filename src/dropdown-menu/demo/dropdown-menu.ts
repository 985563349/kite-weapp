Component({
  data: {
    value: '1',
    options1: [
      { label: 'All', value: '1' },
      { label: 'New', value: '2' },
      { label: 'Activity', value: '3' },
    ],
    options2: [
      { label: 'Default', value: '1', disabled: true },
      { label: 'Good', value: '2' },
      { label: 'Sales', value: '3' },
    ],
    options3: [
      { label: 'Default', value: '1' },
      { label: 'Good', value: '2' },
      { label: 'Sales', value: '3' },
    ],
  },

  methods: {
    onChange(event: WechatMiniprogram.CustomEvent<{ value: string }>) {
      this.setData({ value: event.detail.value });
    },

    onSelect(event: WechatMiniprogram.CustomEvent) {
      console.log('onSelect', event);
    },
  },
});
