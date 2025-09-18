---
sidebar_position: 2
---

# Initialization

At initialization/startup, Rsvim proceeds below steps in order:

## 1. Load Environment Variables

Reads the environment variables and initialize all internal constants.

## 2. Process CLI Arguments

Options and file names from the `rsvim` command line are inspected. Several kinds of use cases are:

- When special options are provided (i.e. `-h`/`--help`, `-V`/`--version`), Rsvim will print some useful information and exit.
- When file names are provided, Rsvim will read them, create a buffer for each one and associate it to the corresponding file name. Rsvim chooses the first file as its default buffer, which will be bound to the default window when TUI initialize.
- If no file name is provided, Rsvim will create a default empty buffer, associated with no file name.

## 3. Load Configuration

Detect the configuration home, and entry point `rsvim.js` (or `rsvim.ts`). The entry point script is executed to apply all configurations. There're several options to choose:

- `$XDG_CONFIG_HOME/rsvim` (config home) and `$XDG_CONFIG_HOME/rsvim/rsvim.{js,ts}` (config entry)
- `$HOME/.rsvim` (config home) and `$HOME/.rsvim/rsvim.{js,ts}` (config entry)
- `$HOME/.rsvim.{js,ts}` (config entry)

:::tip
Checkout [Configuration](/docs/manual/configuration) for more details.
:::

## 4. Initialize TUI

Once all configurations are been set, terminal goes into [raw mode](https://en.wikipedia.org/wiki/Terminal_mode) and a default window is created, bound with the default buffer.

If default buffer is associated with an existing file, the window shows the file content from the first line, cursor is placed at the top-left corner of the window (i.e. the first character of the file content) in normal mode.
