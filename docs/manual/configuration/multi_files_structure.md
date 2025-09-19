---
sidebar_position: 2
---

# Multi-Files Structure

Multi-files configuration structure is supported via the [ES modules](https://tc39.es/ecma262/#sec-modules), i.e. through the `export` and `import` declarations.

## Export/Import

The `export` declaration is used to export values from a module. Then exported values can be imported into other modules with `import` declaration (or dynamic import). For example we have below configuration:

```
$HOME/.rsvim
|- rsvim.js
|- utils.js
|- utils/
   |- add.js
   |- echo.js
```

### `utils/add.js`

```javascript {1}
export function add(a, b) {
  return a + b;
}
```

### `utils/echo.js`

```javascript {1}
export function echo(value) {
  Rsvim.cmd.echo(value);
}
```

### `utils.js`

```javascript {1-2,4}
import { echo } from "./utils/echo.js";
import { add } from "./utils/add.js";

export default { echo, add };
```

### `rsvim.js`

```javascript {1}
import util from "./utils.js";
util.echo(util.add(1, 2));
```

When Rsvim starts, it will print the message `3`.

The string value passed to the `import` is called `specifier`. In this example, it is a file path relative to current javascript file. You can use an absolute file path as well. The `import` declaration here is called [static import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), it runs synchronously.

But, there are some limitations, since Rsvim is not 100% compatible with node:

:::warning[Limitation]

1. Rsvim only supports ES modules, it doesn't support [CommonJS modules](https://nodejs.org/api/modules.html) as node do, `require` is not implemented.
2. File path based `specifier` must contain the file extension, it cannot be omitted like node.

:::

## Dynamic Import

[Dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) allows user loading a module lazily and asynchronously. Recall the above example, let's rewrite the `rsvim.js`:

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

When Rsvim starts, it will schedules a `"./utils.js"` module loading task to background, then completes the configuration phase and initializes the TUI and editor. Once the `"./utils.js"` module is loaded, Rsvim will continue to execute code logic in the remaining script.
