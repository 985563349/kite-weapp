import Toast from 'kite-weapp/toast/index';

Component({
  methods: {
    showTextToast() {
      Toast({ message: 'hello world', context: this });
    },

    showLoadingToast() {
      Toast.loading({ message: 'Loading...', context: this });
    },

    showSuccessToast() {
      Toast.success({ message: 'Success', context: this });
    },

    showWarningToast() {
      Toast.warning({ message: 'Warning', context: this });
    },

    showErrorToast() {
      Toast.error({ message: 'Error', context: this });
    },

    showTopToast() {
      Toast({ message: 'Top', position: 'top', context: this });
    },

    showBottomToast() {
      Toast({ message: 'Bottom', position: 'bottom', context: this });
    },
  },
});
