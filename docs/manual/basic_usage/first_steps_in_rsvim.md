---
sidebar_position: 1
---

# First Steps in Rsvim

## Starting

To start Rsvim, open terminal and enter this command:

```bash
rsvim file.txt
```

Rsvim starts editing a file called "file.txt", because this is a new file, you get a blank window. The terminal will look like:

![Img1](./assets/first_steps_in_rsvim1.svg)

('#' is the cursor position.)

When Rsvim starts, it by default opens a file buffer and a window. A file buffer loads the file content from file system into Rsvim's memory, a window is a text view for the binded buffer. If no file name(s) are provided, Rsvim opens an empty file buffer without file name. If the specific file doesn't exist in file system, Rsvim opens an empty file buffer with the specific file name.

:::tip
There are also other buffer types for different purposes.
:::

## Inserting Text

The Vim (including Neovim/Rsvim) is a model editor, which means the editor behaves differently, depending on which mode you are in, in a certain timing, the editor is only in one certain mode.
