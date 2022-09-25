/**
 * stringのタイプガード
 */
export const isString = (item: unknown): item is string => {
  return typeof item === 'string';
};
