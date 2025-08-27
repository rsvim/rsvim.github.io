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

Rsvim uses a local directory as its configuration's home, there're several locations for user to choose:

### `$RSVIM_CONFIG_HOME`

Rsvim first tries to use `$RSVIM_CONFIG_HOME` as its configuration home directory, if the environment variable exists.
If the `$RSVIM_CONFIG_HOME` directory doesn't exist in file system, Rsvim will create a new directory for it.

:::warning[NOTE]
`$RSVIM_CONFIG_HOME` has the highest priority among all other options.
:::

### `$XDG_CONFIG_HOME/rsvim`

[FreeDesktop Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/) is also respected, it uses `$XDG_CONFIG_HOME/rsvim`
