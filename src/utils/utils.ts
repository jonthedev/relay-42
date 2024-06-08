export const findIndexByPredicate = <T>(
  array: T[],
  predicate: (item: T) => boolean
): number | -1 => {
  return array.findIndex(predicate)
}
