export type DialogContext = WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance;

export type DialogAction = 'confirm' | 'cancel';

export type DialogDispatch = (action: DialogAction) => any;

export interface DialogOptions {
  open?: boolean;
  width?: number | string;
  title?: string;
  content?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmLoading?: boolean;
  cancelLoading?: boolean;
  loadingDelay?: number;
  overlay?: boolean;
  overlayClosable?: boolean;
  duration?: { enter: number; leave: number } | number;
  lockScroll?: boolean;
  zIndex?: number;
  onCancel?: () => any;
  onConfirm?: () => any;
  selector?: string;
  context?: (() => DialogContext) | DialogContext;
}

const defaultOptions: DialogOptions = {
  open: true,
  width: 320,
  title: '',
  content: '',
  showConfirmButton: true,
  showCancelButton: true,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmLoading: false,
  cancelLoading: false,
  loadingDelay: 300,
  overlay: true,
  overlayClosable: true,
  lockScroll: true,
  duration: { enter: 300, leave: 300 },
  zIndex: 11000,
  onCancel: () => {},
  onConfirm: () => {},
  selector: '#k-dialog',
};

function getContext() {
  return getCurrentPages().at(-1);
}

function Dialog(options: DialogOptions) {
  options = { ...defaultOptions, ...options };

  const context = (typeof options.context === 'function' ? options.context() : options.context) || getContext();
  const dialog = context?.selectComponent(options.selector!);

  if (!dialog) {
    console.warn(`未找到 ${options.selector} 节点，请确认 selector 及 context 是否正确`);
    return;
  }

  const dispatch: DialogDispatch = (action) => {
    return action === 'confirm' ? options.onConfirm?.() : options.onCancel?.();
  };

  delete options.selector;
  delete options.context;

  dialog.setData({ ...options, dispatch });
}

export default Dialog;
