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

Once complete, your config home directory structure will be look like:

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

### Setup

ex.rsvim exports its default module with a initialization method `setup`. Let's setup the "ex.rsvim" plugin in your config entry script:

```javascript
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

## Npm

### Download

ex.rsvim also publishes as a npm scoped package [`@rsvim/ex.rsvim`](https://www.npmjs.com/package/@rsvim/ex.rsvim), under the official scope `@rsvim`. Thus we can install it with `npm`:

```bash
npm install @rsvim/ex.rsvim
```

After complete, your config home directory becomes:

```
$HOME/.rsvim
|- rsvim.js
|- package.json      <-- npm will create a `package.json` file
|- package-lock.json <-- also create a `package-lock.json` file
|- node_modules/
   |- @rsvim/
      |- ex.rsvim    <-- `ex.rsvim` downloaded here
         |- lib/
         |- src/
         |- types/
         |- ...
```

And the newly created `package.json` file looks like:

```json
{
  "dependencies": {
    "@rsvim/ex.rsvim": "^0.2.0"
  }
}
```

### Setup

The setup is a little different from git clones, your config entry script becomes:

```javascript {1}
import ex from "@rsvim/ex.rsvim";

ex.setup();
```

You will have to use npm package name instead of a directory name.

## Manage Your Plugins with `package.json`

With the `node_modules` looking up, now you can directly use `npm` to manage all your plugins, even your own Rsvim configurations (your `$HOME/.rsvim` can also be treated as a package), with a single `package.json` file.

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
    "@rsvim/ex": "^0.2.0"
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
Not all plugins in the `package.json` are really existed 😁 (at least for now).
:::
