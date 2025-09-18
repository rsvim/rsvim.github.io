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

`utils/add.js` is:

```javascript
export function add(a, b) {
  return a + b;
}
```

`utils/echo.js` is:

```javascript
export function echo(value) {
  Rsvim.cmd.echo(value);
}
```

`utils.js` is:

```javascript
import { echo } from "./utils/echo.js";
import { add } from "./utils/add.js";

export default { echo, add };
```

`rsvim.js` is:

```javascript
import util from "./utils.js";
util.echo(util.add(1, 2));
```

After starting Rsvim, it will print the message `3`. You can also use absolute file path as well.

But, there are some limitations about Rsvim, since it is not 100% compatible with node:

:::warning[Limitation]

1. Rsvim only supports ES modules, it doesn't support [CommonJS modules](https://nodejs.org/api/modules.html) as node do, the `require` keyword is not implemented.
2. All the file based `specifier` must contain their file extension, i.e. the file extension cannot be omitted like node.

:::

Checkout below resources for further reading:

- MDN [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Node ECMA modules](https://nodejs.org/api/esm.html)
- [Deno modules](https://docs.deno.com/runtime/fundamentals/modules/)
