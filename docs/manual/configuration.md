---
sidebar_position: 5
---

# Configuration

Rsvim uses javascript/typescript scripts to configure its behavior, script drives everything for us.

## Config Home and Entry Point

At startup, Rsvim chooses a local directory as its configuration home, and a `rsvim.js` (or `rsvim.ts`) file as entry point. This script is executed to apply all configurations.

### `$XDG_CONFIG_HOME/rsvim`

First it tries the [FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/), detect whether both below directory and entry file exist:

- Config home: `$XDG_CONFIG_HOME/rsvim`
- Config entry: `$XDG_CONFIG_HOME/rsvim/rsvim.{js,ts}`

:::tip

For environment variable `$XDG_CONFIG_HOME`, it uses different default value on different platforms:

- On Linux, it is `$HOME/.config/rsvim`.
- On MacOS, it is `$HOME/Library/Application Support/rsvim`.
- On Windows, it is `%USERPROFILE%\AppData\Roaming\rsvim` (or `%APPDATA%\rsvim`).

:::

### `$HOME/.rsvim`

Then it tries to detect whether both below directory and entry file exist:

- Config home: `$HOME/.rsvim`
- Config entry: `$HOME/.rsvim/rsvim.{js,ts}`

### `.rsvim.{js,ts}`

Finally it tries to detect whether below entry file exists:

- Config entry: `$HOME/.rsvim.{js,ts}`

## Multi-Files Structure

Multi-files configuration structure is supported via the `import` keyword implementation, defined by [ES module specification](https://tc39.es/ecma262/#sec-modules). There are mainly 2 ways to use the `import` keyword:

### Export/Import

The `export` declaration is used to export values from a module. Then exported values can be imported into other modules with `import` declaration (or dynamic import). For example we have below configuration:

```
$HOME/.rsvim
|- rsvim.js
|- utils.js
|- utils/add.js
|- utils/echo.js
```

#### `utils/add.js`

```javascript {1}
export function add(a, b) {
  return a + b;
}
```

#### `utils/echo.js`

```javascript {1}
export function echo(value) {
  Rsvim.cmd.echo(value);
}
```

#### `utils.js`

```javascript {1-2,4}
import { echo } from "./utils/echo.js";
import { add } from "./utils/add.js";

export default { echo, add };
```

#### `rsvim.js`

```javascript {1}
import util from "./utils.js";
util.echo(util.add(1, 2));
```

When Rsvim starts, it will print the message `3`.

The string value passed to the `import` keyword is called `specifier`, which is a file path relative to current javascript file. You can use an absolute file path as well.

In ES module, the `import` declaration in above example is called [static import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), they are running synchronously.

But, there are some limitations about Rsvim, since it is not 100% compatible with node:

:::warning[Limitation]

1. Rsvim only supports ES modules, it doesn't support [CommonJS modules](https://nodejs.org/api/modules.html) as node do, the `require` keyword is not implemented.
2. File path based `specifier` must contain their file extension, i.e. the file extension cannot be omitted like node.

:::

### Dynamic Import

[Dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) is also supported, it allows user loading their configuration script lazily and asynchronously. For example in above example, the `rsvim.js` is:

```javascript {1,12}
import("./utils.js")
  .then((utils) => {
    util.echo(util.add(1, 2));
  })
  .catch((e) => {
    Rsvim.cmd.echo(e);
  });

// Or

try {
  const utils = await import("./utils.js");
  utils.echo(utils.add(1, 2));
} catch (e) {
  Rsvim.cmd.echo(e);
}
```

When Rsvim starts, it will schedules the `"./utils.js"` module loading to a background task when running the configuration entry point, then completes the configuration phase and initializes the TUI. Once the `"./utils.js"` module completes its loading (asynchronously), Rsvim will continue to execute the logic in the remaining script.

## Package

With config home directory, you can import a package that containing multiple files.

### Simple Package

A simple directory that containing a `index.js` (or `index.ts`) script file is a simple package, we can import the package by its name. For example we have a simple package called `syntax`:

```
$HOME/.rsvim
|- rsvim.js
|- syntax/
   |- index.js
   |- utils.js
```

#### `syntax/utils.js`

```javascript
export function hello(value) {
  Rsvim.cmd.echo(`Hello:${value}`);
}
```

#### `syntax/index.js`

```javascript
import { hello } from "./utils.js";

export default { hello };
```

#### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

Rsvim will look for the `syntax` package in its config home by the directory name, and resolves the entry script path.

In this example, the `"syntax"` specifier will map to the `syntax/index.js` file. Without a `package.json`, a package by default tries to find `index.js` or `index.ts` as a package entry.

### NPM Package

A npm package contains the `package.json` file that describing the meta information. The package name is specified with the `name` field inside the `package.json`, no longer by the directory name. The package entry script is still the `index.js` or `index.ts` by default, but can be override by the `exports` (or `main`) field inside the `package.json`.

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

#### `syntax/package.json`

```json {4,8}
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

#### `syntax/lib/index.js`

```javascript
import { hello } from "./utils.js";

export default { hello };
```

#### `syntax/lib/utils.js`

```javascript
export function hello(value) {
  Rsvim.cmd.echo(`Hello:${value}`);
}
```

#### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

Rsvim will resolve the module path by looking up to the `package.json`. In this example, the `"syntax"` specifier will map to the `syntax/lib/index.js` file.

### `node_modules` Directory

Rsvim will also try to find packages in the `node_modules` directory in the config home. Recall the above example:

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

#### `rsvim.js`

```javascript {1}
import syntax from "syntax";

syntax.hello("Rsvim!");
```

The `"syntax"` specifier will map to `node_modules/syntax/lib/index.js` file, since Rsvim will also find packages in the `node_modules` directory.

### Specify `package.json` In Your Config Home

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

## Recommended Reading

- MDN [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export), [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [Node ECMA modules](https://nodejs.org/api/esm.html)
- [Deno modules](https://docs.deno.com/runtime/fundamentals/modules/)
- [Node - An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
- [NPM - About packages and modules](https://docs.npmjs.com/about-packages-and-modules)
