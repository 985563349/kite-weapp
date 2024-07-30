import KComponent from '../shared/component';
import { isThenable } from '../shared/utils';
import type { DialogAction, DialogDispatch } from './index';

KComponent({
  properties: {
    visible: Boolean,

    width: {
      value: 320,
      type: Number,
      optionalTypes: [String],
    },

    title: String,

    content: String,

    showConfirmButton: {
      type: Boolean,
      value: true,
    },

    showCancelButton: {
      type: Boolean,
      value: false,
    },

    confirmText: {
      value: 'Confirm',
      type: String,
    },

    cancelText: {
      value: 'Cancel',
      type: String,
    },

    confirmLoading: Boolean,

    cancelLoading: Boolean,

    closable: Boolean,

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    overlayStyle: String,

    duration: {
      type: Object,
      optionalTypes: [Number],
      value: { enter: 300, leave: 300 },
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },

    rootPortal: Boolean,

    zIndex: {
      type: Number,
      value: 11000,
    },
  },

  data: {
    dispatch: null as unknown as DialogDispatch | null,
  },

  methods: {
    triggerDispatch(action: DialogAction) {
      const { dispatch } = this.data;

      if (typeof dispatch === 'function') {
        const returnValue = dispatch(action);

        if (isThenable(returnValue)) {
          this.setData({ [`${action}Loading`]: true });

          returnValue
            .then(
              () => this.setData({ visible: false, dispatch: null }),
              () => {}
            )
            .finally(() => {
              this.setData({ [`${action}Loading`]: false });
            });
        } else {
          this.setData({ visible: false, dispatch: null });
        }
      }

      this.triggerEvent(action);
    },

    onConfirm() {
      if (!this.data.visible || this.data.confirmLoading) {
        return;
      }

      this.triggerDispatch('confirm');
    },

    onCancel() {
      if (!this.data.visible || this.data.cancelLoading) {
        return;
      }

      this.triggerDispatch('cancel');
    },

    onClose() {
      const { dispatch } = this.data;

      if (typeof dispatch === 'function') {
        this.setData({ visible: false, dispatch: null });
        Promise.resolve(dispatch('cancel')).catch(() => {});
      }

      this.triggerEvent('cancel');
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.onClose();
      }
    },
  },
});
