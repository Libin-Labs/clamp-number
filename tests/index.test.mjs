import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('keeps values within bounds', () => {
  assert.equal(api.clamp(5, 0, 10), 5);
});
test('clamps below minimum', () => {
  assert.equal(api.clamp(-2, 0, 10), 0);
});
test('clamps above maximum', () => {
  assert.equal(api.clamp(12, 0, 10), 10);
});
test('supports equal bounds', () => {
  assert.equal(api.clamp(9, 3, 3), 3);
});
test('supports negative intervals', () => {
  assert.equal(api.clamp(-5, -10, -2), -5);
});
test('rejects reversed bounds', () => {
  assert.throws(() => api.clamp(1, 2, 0), RangeError);
});
