import KComponent from '../shared/component';
import { debounce } from '../shared/utils';
import type { DialogAction, DialogDispatch } from './index';

KComponent({
  properties: {
    kId: String,

    style: String,

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
      value: true,
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

    loadingDelay: {
      type: Number,
      value: 300,
    },

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    duration: {
      type: Object,
      optionalTypes: [Number],
      value: { enter: 300, leave: 300 },
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },

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
      const debounceSetData = debounce(this.setData.bind(this), this.data.loadingDelay);

      if (typeof dispatch === 'function') {
        debounceSetData({ [`${action}Loading`]: true });

        Promise.resolve(dispatch(action))
          .then(
            () => this.setData({ visible: false, dispatch: null }),
            () => {}
          )
          .finally(() => debounceSetData({ [`${action}Loading`]: false }));
      }

      this.triggerEvent(action);
    },

    onConfirm() {
      if (!this.data.visible) {
        return;
      }

      this.triggerDispatch('confirm');
    },

    onCancel() {
      if (!this.data.visible) {
        return;
      }

      this.triggerDispatch('cancel');
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        const { dispatch } = this.data;

        if (typeof dispatch === 'function') {
          this.setData({ visible: false, dispatch: null });
          Promise.resolve(dispatch('cancel')).catch(() => {});
        }

        this.triggerEvent('cancel');
      }
    },
  },
});
