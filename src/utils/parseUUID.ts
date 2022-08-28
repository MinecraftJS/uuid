import { UUID } from '../UUID';
import { isStringUUID } from './typeAssertion';

/**
 * Parses the given UUID
 * @param uuid Raw UUID to parse
 * @param disableTypeCheck Whether or not to disable type checking
 * @returns The `UUID` instance corresponding to the given UUID
 */
export function parseUUID(uuid: string, disableTypeCheck?: boolean): UUID {
  if (
    disableTypeCheck !== true &&
    !(isStringUUID(uuid) || isStringUUID(uuid, false))
  )
    throw new TypeError(
      'The uuid argument should be a valid uuid (with dashes or not) with a type of string'
    );

  uuid = uuid.replace(/-/g, '');

  const mostSigBits = Buffer.from(uuid.slice(0, 16), 'hex');
  const leastSigBits = Buffer.from(uuid.slice(16, 32), 'hex');

  return new UUID(mostSigBits, leastSigBits);
}
