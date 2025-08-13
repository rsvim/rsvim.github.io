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

:::note
'#' is the cursor position
:::

When Rsvim starts, it by default opens a file buffer and a window. A file buffer loads the file content from file system into Rsvim's memory, a window is a text view for the binded buffer. If no file name(s) are provided, Rsvim opens an empty file buffer without file name. If the specific file doesn't exist in file system, Rsvim opens an empty file buffer with the specific file name.

:::tip
There are also other buffer types for different purposes.
:::

## Inserting Text

The Vim (including Neovim/Rsvim) is a model editor, which means the editor behaves differently, depending on which mode you are in. In a certain timing, the editor is in and only in a certain mode. The 2 basic modes are called "normal" mode and "insert" mode. In normal mode, the characters you type are commands. In insert mode, the characters are inserted as text.

After Rsvim just started, it will be in normal mode. To start insert mode, you type the "i" command ("i" is for "insert"). Then you can insert the text, it will be inserted into the file buffer on current window which the cursor is inside. The file on file system won't be written unless you saved the file buffer. Let's enter the programmer's [limerick](https://vimhelp.org/usr_02.txt.html#02.2):

```text
iA very intelligent turtle
Found programming UNIX a hurdle
```

:::note
The 1st character `i` indicates starting insert mode
:::

After typing "turtle" (last word in 1st line), you press the `<Enter>` key to start a new line. Finally you press the `<Esc>` key to exit insert mode and go back to normal mode. Now you have 2 lines of text in your Rsvim window:

```text
+---------------------------------------+
|A very intelligent turtle              |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

## Moving Around

After you return to normal mode, you can move around by using these keys:

- `h` and `left`
- `j` and `down`
- `k` and `up`
- `l` and `right`

At first, it may appear that these commands were chosen at random. After all, who ever heard of using "l" for right? But actually, there is a very good reason for these choices: Moving the cursor is the most common thing you do in an editor, and these keys are on the [home row](https://simple.wikipedia.org/wiki/Home_row) of your right hand. In other words, these commands are placed where you can type them the fastest (especially when you type with 10 fingers).

## Deleting Characters

To delete a character, move the cursor over it and type "i" to start insert, then type "backspace" to delete a character on the left side, or type "delete" to delete a character on the right side. For example, move cursor to the beginning of the 1st line, type "i" to start insert, then type "delete" for 7 times to delete "A very ". The result should look like:

```text
+---------------------------------------+
|intelligent turtle                     |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

Now you can insert new text, for example by typing:

```text
iA young <Esc>
```

:::note
The 1st character `i` indicates starting insert mode, the last key `<Esc>` indicates returning back to normal mode
:::

It starts insert mode (by `i`), and inserts words "A young ", then exits insert mode (by `<Esc>`). The result is:

```text
+---------------------------------------+
|A young intelligent turtle             |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```
