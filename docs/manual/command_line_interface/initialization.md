---
sidebar_position: 1
---

# Initialization

At initialization/startup, Rsvim proceeds below steps in order:

## Load Environment Variables

Rsvim reads the environment variables and initialize all the constant variables inside itself.

## Process Cli Arguments

The options and file names from the `rsvim` command line are inspected. Several kinds of use cases are:

- When special options are provided (i.e. `-h`/`--help`, `-V`/`--version`), Rsvim will print some useful information and exit.
- When file names are provided, Rsvim will read them, create a buffer for each one and associate it to the corresponding file name.
- If no file name is provided, Rsvim will create a default empty buffer, associated with no file name.
