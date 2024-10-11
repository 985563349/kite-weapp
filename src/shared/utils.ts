export function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

export function isThenable(value?: any): boolean {
  return isObject(value) && typeof value.then === 'function';
}

export function ensureArray<T = any>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function pick<T extends Record<string, any>, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) => {
      acc[key] = object[key];
      return acc;
    },
    {} as Pick<T, K>
  );
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), wait);
  };
}
