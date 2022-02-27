import { flattenArray, NestedArray } from '../flatten-array';

test('Should flatten the nested array with number element type to array of numbers.', () => {
    let inputArray: NestedArray<number> = [1, [2, [3, 3, [6, 3, 1, 2, 4]]], 4];
    expect(flattenArray(inputArray)).toMatchObject([1, 2, 3, 3, 6, 3, 1, 2, 4, 4]);
} );

test("Should flatten the nested array with string element type to array of strings.", () => {
    let inputArray: NestedArray<string> = ["apple", ["pear", ["cherry", "berry", ]], "grape"];
    expect(flattenArray(inputArray)).toMatchObject(["apple", "pear", "cherry", "berry", "grape"]);
});

test("Should flatten the nested array with mixed (string, number, etc.) element types.", () => {
    let inputArray: NestedArray<string | number> = ["apple", ["pear", ["cherry", [3, 3, [6, 3, 1, 2, 4]], "berry", ]], "grape"];
    expect(flattenArray(inputArray)).toMatchObject(["apple", "pear", "cherry", 3, 3, 6, 3, 1, 2, 4, "berry", "grape"]);
});

test("Should return the one element array if the array has only one element.", () => {
    expect(flattenArray([1])).toMatchObject([1]);
});

test("Should return empty array if the array has no elements", () => {
    expect(flattenArray([])).toMatchObject([]);
}); 

test("Should return array despite the invalid input type", () => {
    expect(flattenArray({})).toBeInstanceOf(Array);
    expect(flattenArray(new Date())).toBeInstanceOf(Array);
    expect(flattenArray(8)).toBeInstanceOf(Array);
    expect(flattenArray("Number")).toBeInstanceOf(Array);
    expect(flattenArray("")).toBeInstanceOf(Array);
    expect(flattenArray(undefined)).toBeInstanceOf(Array);
    expect(flattenArray(null)).toBeInstanceOf(Array);
    expect(flattenArray()).toBeInstanceOf(Array);
});

