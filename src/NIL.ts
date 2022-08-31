import { UUID } from './UUID';

const buffer = Buffer.alloc(0);
/**
 * The "nil" UUID, a special case, is the UUID `00000000-0000-0000-0000-000000000000`; that is, all bits set to zero.
 * @see https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
 */
export const NIL = new UUID(buffer, buffer);
