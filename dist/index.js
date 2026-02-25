import { createHash } from 'node:crypto';
import { wrapToolHandlers } from '@trikhub/sdk';
export default wrapToolHandlers({
    computeHash: async (input) => {
        const text = input.text;
        const algorithm = input.algorithm;
        const hash = createHash(algorithm).update(text).digest('hex');
        return { algorithm, hash };
    },
    compareHash: async (input) => {
        const text = input.text;
        const expected = input.hash;
        const algorithm = input.algorithm;
        const computed = createHash(algorithm).update(text).digest('hex');
        return { match: computed === expected.toLowerCase(), algorithm };
    },
});
