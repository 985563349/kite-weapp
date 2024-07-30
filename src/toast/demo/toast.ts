import Toast from 'kite-weapp/toast/index';

Component({
  methods: {
    showTextToast() {
      Toast({ content: 'Message', context: this });
    },

    showLoadingToast() {
      Toast.loading({ content: 'Loading...', context: this });
    },

    showSuccessToast() {
      Toast.success({ content: 'Success', context: this });
    },

    showWarningToast() {
      Toast.warning({ content: 'Warning', context: this });
    },

    showErrorToast() {
      Toast.error({ content: 'Error', context: this });
    },

    showTopToast() {
      Toast({ content: 'Top', position: 'top', context: this });
    },

    showBottomToast() {
      Toast({ content: 'Bottom', position: 'bottom', context: this });
    },
  },
});
