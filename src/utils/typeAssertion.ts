import { UUID } from '../UUID';

const UUIDRegex =
  /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;

const UUIDRegexNoDashes = /[0-9a-fA-F]{32}/;

/**
 * Checks if the given value is a valid UUID
 * @param value The value to check for
 * @param dashes Whether or not the given value includes dashes (defaults to `true`)
 * @returns Whether or not the given string is valid
 */
export function isStringUUID(value: unknown, dashes = true): value is string {
  if (typeof value !== 'string') return false;

  return dashes ? UUIDRegex.test(value) : UUIDRegexNoDashes.test(value);
}

/**
 * Checks if the given value is an instance of the `UUID` class
 * @param value Valud to check for
 * @returns Whether or not the given value is an UUID
 */
export function isUUID(value: unknown): value is UUID {
  return value instanceof UUID;
}
