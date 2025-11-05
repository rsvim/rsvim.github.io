---
sidebar_position: 5
---

# Install Plugin

A plugin is still the same thing we mentioned in previous sections, e.g. a single javascript/typescript file is a plugin, a package is a plugin as well.

Difference is the concept: "module" or "package" is how you structure your configurations, while "plugin" is how these configurations are shared and distributed among the community and users.

You also need to go to Rsvim config home directory before installing any plugins:

```bash
# use $XDG_CONFIG_HOME
cd $XDG_CONFIG_HOME/rsvim

# or use $HOME
cd $HOME/.rsvim
```

In this section, assume you use `$HOME/.rsvim` as Rsvim config home, now let's use [ex.rsvim](https://github.com/rsvim/ex.rsvim) as an example to show how to install and use a plugin.

:::note[About]
The "ex.rsvim" plugin implements Vim's builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) (such as `write`, `quit`) to provide a compatible user experiences. And you don't need to use [the annoying `js` command](/docs/manual/basic_usage/first_steps_in_rsvim#quit) any more.
:::

## Git

### Download

With `git` command, you can download (e.g. `git clone`) the package from GitHub to your config home:

```bash
git clone https://github.com/rsvim/ex.rsvim ex.rsvim
```

Once done, your config home directory structure will be look like:

```
$HOME/.rsvim
|- rsvim.js
|- ex.rsvim   <-- `ex.rsvim` downloaded here
   |- lib/
      |- index.js
      |- ...
   |- src/
      |- index.ts
      |- ...
   |- types/
      |- index.d.ts
      |- ...
   |- README.md
   |- LICENSE.txt
   |- package.json
   |- package-lock.json
   |- ...
```

### Initialization

The "ex.rsvim" plugin export the default "ex" module with the initialization method `setup`. Let's initialize the "ex.rsvim" plugin in your config entry script:

```javascript {1}
import ex from "ex.rsvim";

ex.setup();
```

Since Rsvim can recognize the npm package in its config home directory, it will load the plugin entry `$HOME/.rsvim/ex.rsvim/lib/index.js`, which is specified in its `package.json` file:

```json
{
  "exports": "./lib/index.js",
  ...
}
```

## Npm `package.json`

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
