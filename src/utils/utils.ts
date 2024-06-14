/**
 * Utility Function: findIndexByPredicate
 * --------------------------------------
 *
 * This utility function searches an array for the first element that matches a provided predicate function.
 * It returns the index of the found element, or -1 if no element matches the predicate.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to search.
 * @param {(item: T) => boolean} predicate - The function used to test each element.
 * @returns {number} - The index of the first element that matches the predicate, or -1 if no match is found.
 *
 * Example Usage:
 * ```
 * const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
 * const predicate = (item) => item.id === 2;
 * const index = findIndexByPredicate(array, predicate); // Returns 1
 * ```
 */

export const findIndexByPredicate = <T>(
  array: T[],
  predicate: (item: T) => boolean
): number | -1 => {
  return array.findIndex(predicate)
}
