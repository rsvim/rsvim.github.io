---
sidebar_position: 5
---

# Install Plugin

A plugin is still the same thing we mentioned in previous sections, e.g. a single javascript/typescript file is a plugin, a package is a plugin as well.

Difference is the concept: "module" or "package" is how you structure your configurations, while "plugin" is how these configurations are shared and distributed among the community and users.

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
The plugins in the `package.json` may not be real 😁 (at least for now).
:::
