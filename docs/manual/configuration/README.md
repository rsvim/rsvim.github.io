---
sidebar_position: 5
---

# Configuration

Rsvim uses javascript/typescript scripts to configure its behavior, script drives everything.

## Config Home and Entry Point

At startup, Rsvim chooses a local directory as its config home, and a `rsvim.js` (or `rsvim.ts`) file under that directory as the entry point.

The entry point script will be executed to apply all configurations.

## Candidate Locations

Rsvim tries to find its config home in following 3 locations in turn, picks the first that meets the requirements.

### `$XDG_CONFIG_HOME/rsvim`

First it tries to find whether the [FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) directory and entry file exist:

- Config home: `$XDG_CONFIG_HOME/rsvim`
- Config entry: `$XDG_CONFIG_HOME/rsvim/rsvim.{js,ts}`

:::tip

For environment variable `$XDG_CONFIG_HOME`, it has different default value on different platforms:

- On Linux, it is `$HOME/.config/rsvim`.
- On MacOS, it is `$HOME/Library/Application Support/rsvim`.
- On Windows, it is `%USERPROFILE%\AppData\Roaming\rsvim` (or `%APPDATA%\rsvim`).

:::

### `$HOME/.rsvim`

Then it tries to find whether below directory and entry file exist:

- Config home: `$HOME/.rsvim`
- Config entry: `$HOME/.rsvim/rsvim.{js,ts}`

### `$HOME/.rsvim.{js,ts}`

Finally it tries to find whether below entry file exists:

- Config entry: `$HOME/.rsvim.{js,ts}`

For the last location, it doesn't have a config home. This will affect the "package" resolving for Rsvim, please refer to [Simple Package](./simple_package.md) for more details.
