---
sidebar_position: 2
---

# Initialization

At initialization/startup, Rsvim proceeds below steps in order:

## 1. Load Environment Variables

Reads the environment variables and initialize all the constant variables inside itself.

## 2. Process Cli Arguments

Options and file names from the `rsvim` command line are inspected. Several kinds of use cases are:

- When special options are provided (i.e. `-h`/`--help`, `-V`/`--version`), Rsvim will print some useful information and exit.
- When file names are provided, Rsvim will read them, create a buffer for each one and associate it to the corresponding file name.
- If no file name is provided, Rsvim will create a default empty buffer, associated with no file name.

## 3. Load Configuration Script

Rsvim chooses a local directory as its configuration home, and a `rsvim.js` (or `rsvim.ts`) script file as configuration entry.

There're several locations for user to choose:

### `$RSVIM_CONFIG_HOME``

Rsvim first tries to detect:

1. Whether the `$RSVIM_CONFIG_HOME` environment variable exists as a directory path in file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.

If all 3 conditions are satisfied, Rsvim uses this directory as its configuration home, and `rsvim.{js,ts}` as configuration entry.

### `$XDG_CONFIG_HOME/rsvim`

Then Rsvim tries to detect the [FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) as a secondary choice:

1. Whether `$XDG_CONFIG_HOME/rsvim` exists as a directory path in file system.
2. Whether a `rsvim.{js,ts}` file exists in the directory.
