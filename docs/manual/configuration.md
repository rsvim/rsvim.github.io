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

### Export

The [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) declaration

```javascript
// export default {...};
import utils from "./utils.js";

// export ...
import { echo, add, sub, multiple, divide } from "./utils.js";
```

Checkout below resources for further reading:

- MDN [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Node ECMA modules](https://nodejs.org/api/esm.html)
- [Node ECMA modules](https://nodejs.org/api/esm.html)
