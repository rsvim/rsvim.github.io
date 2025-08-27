---
sidebar_position: 2
---

# Initialization

At initialization/startup, Rsvim proceeds below steps in order:

## 1. Load Environment Variables

Reads the environment variables and initialize all internal constants.

## 2. Processing CLI Arguments

Options and file names from the `rsvim` command line are inspected. Several kinds of use cases are:

- When special options are provided (i.e. `-h`/`--help`, `-V`/`--version`), Rsvim will print some useful information and exit.
- When file names are provided, Rsvim will read them, create a buffer for each one and associate it to the corresponding file name. Rsvim chooses the first file as its default buffer, which will be bound to the default window on TUI.
- If no file name is provided, Rsvim will create a default empty buffer, associated with no file name.

## 3. Loading configuration script

Chooses a local directory as its configuration home, and a `rsvim.js` (or `rsvim.ts`) file as the entry point. This entry script is then executed to apply all configurations.

There're several locations to choose:

### `$XDG_CONFIG_HOME/rsvim`

Then tries to detect the [FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) as a second choice:

1. Whether a `$XDG_CONFIG_HOME/rsvim` directory exists in the file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.

:::tip

- On Linux and macOS, this will be `$HOME/.config/rsvim`.
- On Windows, this will be `%USERPROFILE%\AppData\Roaming\rsvim` (or `%APPDATA%\rsvim`).

:::

### `$HOME/.rsvim`

Then tries to detect:

1. Whether a `$HOME/.rsvim` directory exists in file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.

### `.rsvim.{js,ts}`

If all above have failed, finally tries to detect:

1. Whether a `$HOME/.rsvim.{js,ts}` file exists.

If yes, Rsvim will use it as the configuration entry and `$HOME/.rsvim` as the configuration home, and create a `$HOME/.rsvim` directory if does not exist.

## 4. Initializing TUI

Once all the configurations have been sourced, terminal goes into [raw mode](https://en.wikipedia.org/wiki/Terminal_mode) and a default window is created, bound with the default buffer.

If the default buffer is associated with an existing file, the window shows the file content from the first line, with cursor placed at the top-left corner of the window (i.e. the first character of the file content) in normal mode.
