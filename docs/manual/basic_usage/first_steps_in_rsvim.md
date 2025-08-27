---
sidebar_position: 1
---

# First Steps in Rsvim

## Start

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

When Rsvim starts, it by default opens a file buffer and a window. A file buffer loads the file content from the file system into Rsvim's memory. A window is a text view for the binded buffer. With no file(s) provided, Rsvim opens an empty file buffer without file name. If the specific file does not exist in the file system, Rsvim opens an empty file buffer with the specific file name.

## Inserting Text

Rsvim is a modal editor, meaning the editor behaves differently depending on which mode you are in. At any given time, the editor would be in exactly one mode.
The 2 basic modes are called "normal" mode and "insert" mode. In normal mode, keystrokes are interpreted as commands. In insert mode, they are inserted as text (except `<Esc>`; see below).

Upon launch, Rsvim initialises in normal mode. To switch to insert mode, use the "i" ("insert") command. Typed characters are then appended to the file buffer in the current window at the cursor's position. Note that changes are made only to the buffer in memory; the file system will not be altered until the buffer is explicitly saved. Let's enter the programmer's [limerick](https://vimhelp.org/usr_02.txt.html#02.2):

```text
iA very intelligent turtle
Found programming UNIX a hurdle
```

:::note
The initial `i` command indicates the command to enter insert mode.
:::

After typing "turtle" (last word in the first line), press `<Enter>` key to start a new line. Finally press `<Esc>` key to exit insert mode and go back to normal mode. Now you should have 2 lines of text in your Rsvim window:

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

After you return to normal mode, you can move around using these keys:

- `h` and `left`
- `j` and `down`
- `k` and `up`
- `l` and `right`

It may appear that these commands were chosen at random. After all, who ever heard of using "l" for right? But actually, there is a very good reason for these choices: Moving the cursor is the most common thing you do in an editor, and these keys are on the [home row](https://simple.wikipedia.org/wiki/Home_row) of your right hand, assuming you are on the QWERTY keyboard layout. In other words, these commands are placed where you can type them the fastest (especially when you type with 10 fingers).

## Deleting Characters

To delete a character, move the cursor over it and type "i" to start insert, then type "backspace" to delete a character on the left, or type "delete" to delete a character on the right. For example, move cursor to the beginning of the first line, type "i" to start insert mode, then type "delete" 7 times to delete "A very ". The result should look like:

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
The initial `i` command indicates starting insert mode; the last `<Esc>` key indicates returning back to normal mode.
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

## Appending

The `i` command starts inserting under the cursor, while the `a` command starts inserting after the cursor. For example, to append "!!!" at the end of this line:

```text
and that's not saying much for the turtle
```

Move the cursor to the end of the line, at the last `e` character, type:

```text
a!!!<Esc>
```

:::note
The initial `a` command indicates appending; the last `<Esc>` key indicates returning back to normal mode.
:::

The result is:

```text
and that's not saying much for the turtle!!!
```

## Opening Up a New Line

The `o` command creates a new, empty line below the cursor and starts insert mode. You can then insert text for the new line. For example, the cursor is at the beginning of the first line:

```text
# very intelligent turtle
Found programming UNIX a hurdle
```

If you now use the `o` command and type some text:

```text
oThat liked using Vim<Esc>
```

:::note
The initial `o` command indicates opening up a new line; the last `<Esc>` key indicates returning back to normal mode.
:::

The result should be:

```text {2}
A very intelligent turtle
That liked using Vim
Found programming UNIX a hurdle
```

## Save Your Work

All the editings only change the in-memory text contents inside Rsvim; they will not be saved to the file system until you execute so. Once you are in normal mode, type the ":" command to start the "command-line" mode.

For example, to save the current contents to the file system, type:

```text
:js Rsvim.buf.writeSync(Rsvim.buf.current());<Enter>
```

:::note
The initial `:` command indicates starting the "command-line" mode ("ex-command" variant); the last `<Enter>` key indicates confirming the input EX command, send to Rsvim, and returning back to normal mode.

[`Rsvim.buf.current()`](/docs/next/api/rsvim/classes/RsvimBuf#current) returns the ID of the current buffer, and
[`Rsvim.buf.writeSync(<id>)`](/docs/next/api/rsvim/classes/RsvimBuf#writesync) writes the buffer's (specified by the ID) contents to file system.
:::

Then you can verify the file content in file system.

## Quit

After saving the file, one may exit Rsvim by typing:

```text
:js Rsvim.rt.exit();<Enter>
```

:::note
The initial `:` command indicates starting the "command-line" mode ("ex-command" variant); the last `<Enter>` key indicates confirming the input EX command, send to Rsvim, and returning back to normal mode.
:::

Then you can go on with other works.

:::tip[Question]
Where are the `:w` and `:q` EX commands? Aren't they much shorter and easier for users?

Yes, `:w` and `:q` are better than `:js` with super long expressions.
Currently (`v0.1.1`), only one builtin ex command `:js` is provided, and the users are limited to do it this way.

This is mostly because Rsvim will not embed any builtin plugins, including the EX commands (i.e. `:w`, `:q`, etc).
On the contrary, Rsvim will provide APIs such as `Rsvim.cmd.create()` to allow user create their own ex commands.

As a supplement to the editing experience, Rsvim will provide an official plugin (say, "ex.rsvim") to recreate all the commands
compatible with Vim/Neovim, including `:w`, `:q`, etc.
:::
