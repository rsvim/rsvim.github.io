---
sidebar_position: 1
---

# Initialization

At initialization/startup, Rsvim proceeds below steps in order:

## Process Cli Arguments

The options and file names from the `rsvim` command line are inspected. Several kinds of use cases are:

- When special options are provided (i.e. `-h`/`--help`, `-V`/`--version`), Rsvim will print some useful information and exit.
- When file names are provided, Rsvim will read them and create a related buffer for each of them.
