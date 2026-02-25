import { createHash } from 'node:crypto';
import { wrapToolHandlers } from '@trikhub/sdk';

export default wrapToolHandlers({
  computeHash: async (input) => {
    const text = input.text as string;
    const algorithm = input.algorithm as string;
    const hash = createHash(algorithm).update(text).digest('hex');
    return { algorithm, hash };
  },

  compareHash: async (input) => {
    const text = input.text as string;
    const expected = input.hash as string;
    const algorithm = input.algorithm as string;
    const computed = createHash(algorithm).update(text).digest('hex');
    return { match: computed === expected.toLowerCase(), algorithm };
  },
});
