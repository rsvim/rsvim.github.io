---
sidebar_position: 3
---

# Simple Package

With config home, you can import a package that containing multiple files.

:::tip
As mentioned in [Configuration](./#homersvimjsts), the entry point `$HOME/.rsvim.{js,ts}` doesn't have a config home, thus it cannot have any packages.
:::

## Simple Package

A simple directory that containing a `index.js` (or `index.ts`) file is a simple package, we can import the package by the directory name. For example we have a simple package called `syntax`:

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

Rsvim will look for the `syntax` package in its config home by the directory name, and resolves the entry script path.

In this example, the `"syntax"` specifier is resolved to the `syntax/index.js` file. Without a `package.json`, a package by default tries to find `index.js` or `index.ts` as its package entry.

## NPM Package

A npm package contains the `package.json` file that describing meta information. The package name is specified with the `name` field inside the `package.json`, no longer by the directory name. The package entry script is still the `index.js` or `index.ts` by default, but can be override by the `exports` (or `main`) field inside the `package.json`.

For example we recreate the `syntax` package in npm package format:

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

Rsvim will resolve the module path by looking up to the `package.json`. In this example, the `"syntax"` specifier is resolved to the `syntax/lib/index.js` file.

## `node_modules` Directory

Rsvim will also try to find packages in the `node_modules` directory under config home. Let's rewrite the above example:

```
$HOME/.rsvim
|- rsvim.js
|- node_modules/
   |- syntax/
      |- package.json
      |- lib/
         |- index.js
         |- utils.js
```

### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

The `"syntax"` specifier is resolved to `node_modules/syntax/lib/index.js` file, since Rsvim will also find packages in the `node_modules` directory.

## Specify `package.json` In Your Config Home

With the `node_modules` looking up, you can use `npm` command to manage all your Rsvim configs and plugins, with a single `package.json` file. For example:

```
$HOME/.rsvim
|- rsvim.js
|- package.json
```

#### `package.json`

```json
{
  "type": "module",
  "dependencies": {
    "@rsvim/syntax": "^0.1.0",
    "@rsvim/ex": "^0.1.0"
    ...
  }
}
```

In the `package.json`, it specifies all the plugins it needs. Then simply run command `npm install` inside the config home, all the plugins will be installed in the `node_modules` directory, and that's all.

:::warning
The plugins in the `package.json` are not real 😁.
:::

## Recommend Reading

- MDN [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [Node ECMA modules](https://nodejs.org/api/esm.html)
- [Deno modules](https://docs.deno.com/runtime/fundamentals/modules/)
- [Node - An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
- [NPM - About packages and modules](https://docs.npmjs.com/about-packages-and-modules)
