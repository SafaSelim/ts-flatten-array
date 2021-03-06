/**
 * @title Flatten Array in Typescript
 * @author Safa Selim
 * @date 02.27.22
 */

/**
 * Definition of nested array model.
 * @type Array<NestedArray<T> | T> | T 
 */
export type NestedArray<T> = Array<NestedArray<T> | T> | T;

/**
 * Flattens the nested arrays to one single array.
 * @function flattenArray
 * @param inputArray NestedArray<T>
 * @returns Array<T>
 */
export function flattenArray<T>(inputArray?: NestedArray<T>): Array<T> {
  if (!Array.isArray(inputArray)) return inputArray ? [inputArray] : [];
  if(!(inputArray instanceof Array)) return [];
  
  return inputArray.reduce<Array<T>>((acc: Array<T>, item: NestedArray<T>) => {
    if (Array.isArray(item)) {
      return [...acc, ...flattenArray(item)];
    }
    return [...acc, item];
  }, []);
}
