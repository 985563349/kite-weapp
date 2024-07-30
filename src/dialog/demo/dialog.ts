import Dialog from 'kite-weapp/dialog/index';

Component({
  data: {
    visible: false,
  },

  methods: {
    onClickBasicOpen() {
      Dialog({
        title: 'Title',
        content: 'If the solution is ugly, then there must be a better solution, but it has not been discovered yet.',
        onConfirm() {
          console.log('confirm');
        },
      });
    },

    onClickAsyncOpen() {
      Dialog.confirm({
        title: 'Title',
        content: 'If the solution is ugly, then there must be a better solution, but it has not been discovered yet.',
        onCancel() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(null);
              console.log('cancel');
            }, 3000);
          });
        },
        onConfirm() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
              console.log('confirm');
            }, 3000);
          });
        },
      });
    },

    onClickComponentOpen() {
      this.setData({ visible: true });
    },

    onClickComponentCancel() {
      this.setData({ visible: false });
      console.log('cancel');
    },

    onClickComponentConfirm() {
      this.setData({ visible: false });
      console.log('confirm');
    },
  },
});
