# next-path-match
> A wrapper for path-to-regexp.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-path-match
```

## usage
```js
import '@jswork/next-path-match';

const res = nx.pathMatch(
  '/dashboard/self-analysis/:type/:id',
  '/dashboard/self-analysis/folder/13'
);

// result:
{
  type:'folder',
  id:'13'
}
```

## options
| name         | default        | description                                  |
| ------------ | -------------- | -------------------------------------------- |
| replacements | [['?', '\\?']] | Replace for pre process route.               |
| completion   | both           | Will completion route(`both/left/right/none`). |

## resources
- https://github.com/pillarjs/path-to-regexp

## license
Code released under [the MIT license](https://github.com/afeiship/next-path-match/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-path-match
[version-url]: https://npmjs.org/package/@jswork/next-path-match

[license-image]: https://img.shields.io/npm/l/@jswork/next-path-match
[license-url]: https://github.com/afeiship/next-path-match/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-path-match
[size-url]: https://github.com/afeiship/next-path-match/blob/master/dist/next-path-match.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-path-match
[download-url]: https://www.npmjs.com/package/@jswork/next-path-match
