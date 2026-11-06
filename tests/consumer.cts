import * as api from '@lp-labs/clamp-number';
import { clamp } from '@lp-labs/clamp-number';
console.log(clamp(12, 0, 10));
// @ts-expect-error invalid argument must be rejected by declarations
api.clamp('12', 0, 10);
