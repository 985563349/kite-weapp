export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), wait);
  };
}

export function isThenable(value?: any): boolean {
  return isObject(value) && typeof value.then === 'function';
}

export function ensureArray<T = any>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
