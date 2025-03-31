import { SHA256 } from 'crypto-js';

export function createGoodHash(name, color, size, price) {
  return SHA256(JSON.stringify({ name, color, size, price })).toString();
}
