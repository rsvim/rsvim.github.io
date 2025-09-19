---
sidebar_position: 3
---

# Simple Package

With config home, you can import a package that containing multiple files.

:::tip
As mentioned in [Configuration](./#homersvimjsts), the entry point `$HOME/.rsvim.{js,ts}` doesn't have a config home, thus it cannot have any packages.
:::

A simple package is a directory that containing a `index.js` (or `index.ts`) script file, Rsvim can import the package by the directory name.

## Example

For example we have a simple package called `syntax`:

```
$HOME/.rsvim
|- rsvim.js
|- syntax/
   |- index.js
   |- utils.js
```

### `syntax/utils.js`

```javascript
export function hello(value) {
  Rsvim.cmd.echo(`Hello:${value}`);
}
```

### `syntax/index.js`

```javascript
import { hello } from "./utils.js";

export default { hello };
```

### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

Rsvim will look for the `"syntax"` package in its config home by the directory name `syntax`.

In simple package, entry point is by default resolved to the `index.js` or `index.ts` script file. In this example, the `"syntax"` specifier is resolved to the `syntax/index.js` file.

Once a package contains a `package.json` file, it becomes a [NPM package](./npm_package.md).
