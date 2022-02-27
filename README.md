# Flatten Array in Typescript

Flattens nested arrays into one single array.

## Installation

In your roject, run:

```shell
$ npm install ts-flatten-array --save-dev
```

Include the function:

```typescript
import { flattenArray } from 'ts-flatten-array';
```

## Basic Usage

Flattens an array without type declration:

```typescript
flattenArray([1, [2, 3, [4, 5], 6, [7]]]); // => [1, 2, 3, 4, 5, 6, 7]
```

### For Type Safety

Include the type:

```typescript
import { NestedArray } from 'ts-flatten-array';

let inputArrayNumber: NestedArray<number> = [1, [2, [3, 3, [6, 3, 1, 2, 4]]], 4];
let inputArrayString: NestedArray<string> = ["apple", ["pear", ["cherry", "berry", ]], "grape"];
let inputArrayNumberAndString: NestedArray<string | number> = ["apple", ["pear", ["cherry", [3, 3, [6, 3, 1, 2, 4]], "berry", ]], "grape"];
```
