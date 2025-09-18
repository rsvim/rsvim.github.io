---
sidebar_position: 5
---

# Configuration

Rsvim uses javascript/typescript scripts to configure its behavior, script drives everything for us.

## Configuration Home and Entry

At startup, Rsvim chooses a local directory as its configuration home, and a `rsvim.js` (or `rsvim.ts`) file as entry point. This script is executed to apply all configurations. There're several options.

### `$XDG_CONFIG_HOME/rsvim`

First detect [FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/):

1. Whether a `$XDG_CONFIG_HOME/rsvim` directory exists in file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.

:::tip

- On Linux, it is `$HOME/.config/rsvim`.
- On MacOS, it is `$HOME/Library/Application Support/rsvim`.
- On Windows, it is `%USERPROFILE%\AppData\Roaming\rsvim` (or `%APPDATA%\rsvim`).

:::

### `$HOME/.rsvim`

Then tries to detect:

1. Whether a `$HOME/.rsvim` directory exists in file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.

### `.rsvim.{js,ts}`

If all above failed, finally tries to detect:

1. Whether a `$HOME/.rsvim.{js,ts}` file exists.

If yes, Rsvim uses it as the entry point and `$HOME/.rsvim` as the configuration home, creates a directory if `$HOME/.rsvim` doesn't exist.
