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

Rsvim will resolve the module name by the `"name"` field in `package.json`, no longer by the package's directory name. It means you can provide a different directory name.

Rsvim will resolve the module path by looking into the `package.json` file. In this example, the `"syntax"` specifier is resolved to the `syntax/lib/index.js` file, because `package.json` specifies the entry point with `"exports": {".": "./lib/index.js"}`.

## Node Modules

Rsvim also tries to find npm packages in the `node_modules` directory under config home.

Let's rewrite the `syntax` example (in the [above](#example)):

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

> Other files are still the same...

The `"syntax"` specifier is resolved to `node_modules/syntax/lib/index.js` file.

## Add `package.json` in Config Home

With the `node_modules` looking up, now you can directly use the [npm manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) to manage all your Rsvim configs and plugins, with a single `package.json` file.

For example your config home is:

```
$HOME/.rsvim
|- rsvim.js
|- package.json
```

### `package.json`

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

### `rsvim.js`

```javascript
import syntax from "@rsvim/syntax";
import ex from "@rsvim/ex";

syntax.setup();
ex.setup();
```

The `package.json` specifies all the plugins with semantic version support. Run the `npm install` command inside the config home, all plugins will be installed in the `node_modules` directory.

The config entry `rsvim.js` can just import these npm packages just like node/deno!

:::warning
The plugins in the `package.json` are not real 😁 (at least for now).
:::
