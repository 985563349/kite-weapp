type ToastContext = WechatMiniprogram.Component.TrivialInstance | WechatMiniprogram.Page.TrivialInstance;

export interface ToastOptions {
  open?: boolean;
  type?: string;
  message?: string | number;
  position?: string;
  stay?: number;
  overlay?: boolean;
  duration?: { enter: number; leave: number } | number;
  selector?: string;
  context?: (() => ToastContext) | ToastContext;
  onClose?: () => void;
}

export interface ToastInstance extends WechatMiniprogram.Component.TrivialInstance {
  close: () => void;
}

const defaultOptions: ToastOptions = {
  open: true,
  type: '',
  message: '',
  position: '',
  stay: 2000,
  overlay: false,
  duration: { enter: 300, leave: 300 },
  selector: '#k-toast',
  onClose: () => {},
};

function getContext() {
  return getCurrentPages().at(-1);
}

function Toast(options: ToastOptions) {
  options = { ...defaultOptions, ...options };

  const context = (typeof options.context === 'function' ? options.context() : options.context) || getContext();
  const toast = context?.selectComponent(options.selector!);

  if (!toast) {
    console.warn(`未找到 ${options.selector} 节点，请确认 selector 及 context 是否正确`);
    return;
  }

  toast.close = () => {
    if (toast.data.open) {
      toast.setData({ open: false });
      options.onClose?.();
    }
  };

  delete options.context;
  delete options.selector;

  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.stay != null && options.stay > 0) {
    toast.timer = setTimeout(toast.close, options.stay);
  }

  return toast as ToastInstance;
}

const createStaticMethod = (type: string) => (options: Omit<ToastOptions, 'type'>) => {
  return Toast({ type, ...options });
};

Toast.loading = createStaticMethod('loading');
Toast.success = createStaticMethod('success');
Toast.warning = createStaticMethod('warning');
Toast.error = createStaticMethod('error');

export default Toast;
