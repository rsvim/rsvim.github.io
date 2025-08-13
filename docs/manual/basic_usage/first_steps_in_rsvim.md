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

```text
+---------------------------------------+
|#                                      |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

('#' is the cursor position.)

When Rsvim starts, it by default opens a file buffer and a window. A file buffer loads the file content from file system into Rsvim's memory, a window is a text view for the binded buffer. If no file name(s) are provided, Rsvim opens an empty file buffer without file name. If the specific file doesn't exist in file system, Rsvim opens an empty file buffer with the specific file name.

:::tip
There are also other buffer types for different purposes.
:::

## Inserting Text

The Vim (including Neovim/Rsvim) is a model editor, which means the editor behaves differently, depending on which mode you are in. In a certain timing, the editor is in and only in a certain mode. The two basic modes are called "normal" mode and "insert" mode. In normal mode, the characters you type are commands. In insert mode, the characters are inserted as text.

After Rsvim just started, it will be in normal mode. To start insert mode, you type the "i" command ("i" is for "insert"). Then you can insert the text, it will be inserted into the file buffer on current window which the cursor is inside. The file on file system won't be written unless you saved the file buffer. Let's enter the programmer's [limerick](https://vimhelp.org/usr_02.txt.html#02.2):

```text
iA very intelligent turtle
Found programming UNIX a hurdle
```

After typing "turtle" (last word in 1st line), you press the `<Enter>` key to start a new line. Finally you press the `<Esc>` key to exit insert mode and go back to normal mode. Now you have two lines of text in your Rsvim window:

```text
+---------------------------------------+
|iA very intelligent turtle             |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```
