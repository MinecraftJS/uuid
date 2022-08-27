import { randomUUID, RandomUUIDOptions } from 'node:crypto';
import { parseUUID } from '../utils/parseUUID';
import { UUID } from '../UUID';

/**
 * Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID.
 * The UUID is generated using a cryptographic pseudorandom number generator.
 *
 * This function internally uses the `randomUUID` function from the `node:crypto` module.
 * @param options Options to pass to the generator
 * @returns The `UUID` instance corresponding to the generated UUID
 */
export function generateV4(options?: GenerateV4Options): UUID {
  const generated = randomUUID(options);
  return parseUUID(generated, options?.disableTypeCheck);
}

/**
 * Options that can be passed to the `generateV4` function
 */
export interface GenerateV4Options extends RandomUUIDOptions {
  /**
   * Whether or not to disable type checking when parsing the UUID.
   * Significantly improves performance, but can be risky.
   */
  disableTypeCheck?: boolean;
}
