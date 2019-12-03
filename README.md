# next-path-match
> A wrapper for path-to-regexp.

## installation
```bash
npm install -S @feizheng/next-path-match
```

## usage
```js
import '@feizheng/next-path-match';

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

## resources
- https://github.com/pillarjs/path-to-regexp
