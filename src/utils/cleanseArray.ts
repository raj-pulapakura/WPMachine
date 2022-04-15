export function cleanseArray<T>(array: T[]) {
  return Array.from(new Set(array));
}
