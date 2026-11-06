export function clamp(value: number, min: number, max: number): number {
  if (![value, min, max].every(Number.isFinite)) throw new TypeError('Expected finite numbers');
  if (min > max) throw new RangeError('Minimum exceeds maximum');
  return Math.min(max, Math.max(min, value));
}
