import { isStringUUID } from './typeAssertion';

/**
 * Adds the 4 dashes to the given UUID
 * @param uuid Raw UUID to add the dashes to
 * @returns The same UUID but with dashes
 */
export function addDashesToUUID(uuid: string): string {
  if (!isStringUUID(uuid, false))
    throw new TypeError(
      'The uuid argument should be a valid uuid (with no dashes) with a type of string'
    );

  return (
    uuid.slice(0, 8) +
    '-' +
    uuid.slice(8, 12) +
    '-' +
    uuid.slice(12, 16) +
    '-' +
    uuid.slice(16, 20) +
    '-' +
    uuid.slice(20, 32)
  );
}
