---
sidebar_position: 4
---

# NPM Package

A [npm package](https://docs.npmjs.com/about-packages-and-modules) contains the `package.json` file that describes the meta information for the package.

The package name is specified with the `name` field in `package.json`, no longer by the directory name. The entry point is still `index.js` or `index.ts` by default, but can be override by the `exports` or `main` field in `package.json`.

## Example

For example let's recreate the `syntax` package (in [Simple Package](./simple_package.md#example)) in npm package format:

```
$HOME/.rsvim
|- rsvim.js
|- syntax/
   |- package.json
   |- lib/
      |- index.js
      |- utils.js
```

### `syntax/package.json`

```json {2,4,8}
{
  "name": "syntax",
  "version": "0.1.0"
  "exports": {
      ".": "./lib/index.js"
  },
  // Or
  "main": "./lib/index.js"
}
```

### `syntax/lib/index.js`

```javascript
import { hello } from "./utils.js";

export default { hello };
```

### `syntax/lib/utils.js`

```javascript
export function hello(value) {
  Rsvim.cmd.echo(`Hello:${value}`);
}
```

### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

Rsvim will resolve the module name by the `"name"` field in `package.json`, no longer by the package's directory name. It means you can provide a different directory name from the `"name"` in `package.json`.

Rsvim will resolve the module path by looking into the `package.json` file.

In this example, the `"syntax"` specifier is resolved to the `syntax/lib/index.js` file.
