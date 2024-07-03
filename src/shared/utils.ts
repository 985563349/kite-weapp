export function ensureArray<T = any>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
