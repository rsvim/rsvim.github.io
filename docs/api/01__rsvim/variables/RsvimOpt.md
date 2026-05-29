```ts
RsvimOpt: object;
```

The `Rsvim.opt` global object for global editor options. These options will change the editor's behavior
and suit user's personal habits.

There are 3 kinds of editor option:
- Global options: Options that are global that you use one value for all Rsvim component instances such
  as buffer, window, statusline, etc. When you change the option, it will take effect immediately and
  affect all existing instances.
- Local options: Options that only apply to one component instance, each instance has its own copy of
  this option, thus each can have its own value. This allow you to set an option in one instance, without
  modifying other instances.
- Global local options: Options that are global, and will be copy to a newly created Rsvim component
  instance. A global-local-option always has its corresponding local-option. When you change the option,
  it only will apply to the newly created instances, but cannot modify existing instances.

## Type Declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`get expandTab`

</td>
<td>

`boolean`

</td>
<td>

Get the _expand-tab_ option. Local to buffer.

When in insert mode, inserts [spaces](https://en.wikipedia.org/wiki/Whitespace_character) (ASCII `32`)
instead of a [horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

See [shiftWidth](#shiftwidth) to get the number of spaces when inserting.

**Example**

```javascript
// Get the 'expand-tab' option.
const value = Rsvim.opt.expandTab;
```

</td>
</tr>
<tr>
<td>

`set expandTab`

</td>
<td>

`void`

</td>
<td>

Set the _expand-tab_ option.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not a boolean.

**Example**

```javascript
// Set the 'expand-tab' option.
Rsvim.opt.expandTab = true;
```

</td>
</tr>
<tr>
<td>

`get fileEncoding`

</td>
<td>

`"utf-8"`

</td>
<td>

Get the _file-encoding_ option. Local to buffer.

Sets the [character encoding](https://en.wikipedia.org/wiki/Character_encoding) for the file of this buffer.
This will determine which character encoding is used when RSVIM read/write a file from file system.

:::warning
For now, only **utf-8** encoding is supported.
:::

**Example**

```javascript
// Get the 'file-encoding' option.
const value = Rsvim.opt.fileEncoding;
```

</td>
</tr>
<tr>
<td>

`set fileEncoding`

</td>
<td>

`void`

</td>
<td>

Set the _file-encoding_ option.

**Throws**

Throws [RangeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError) if value is an invalid option.

**Example**

```javascript
// Set the 'file-encoding' option.
Rsvim.opt.fileEncoding = "utf-8";
```

</td>
</tr>
<tr>
<td>

`get fileFormat`

</td>
<td>

`"dos"` \| `"unix"` \| `"mac"`

</td>
<td>

Get the _file-format_ option. Local to buffer.

Sets the [line end](https://en.wikipedia.org/wiki/Newline) for the buffer. There are 3 kinds of line end:
- `CRLF`: used by [Windows](https://www.microsoft.com/windows).
- `LF`: used by [Linux](https://en.wikipedia.org/wiki/Linux) and [Unix](https://en.wikipedia.org/wiki/Unix) (include [MacOS](https://www.apple.com/macos/)).
- `CR`: used by [classic MacOS](https://en.wikipedia.org/wiki/Classic_Mac_OS).

:::warning
Today's Mac also uses `LF` as line end, you should never use `CR` any more.
:::

For this option, it has below choices:
- `"dos"`: equivalent to `CRLF` line end.
- `"unix"`: equivalent to `LF` line end.
- `"mac"`: equivalent to `CR` line end.

**Example**

```javascript
// Get the 'file-format' option.
const value = Rsvim.opt.fileFormat;
```

</td>
</tr>
<tr>
<td>

`set fileFormat`

</td>
<td>

`void`

</td>
<td>

Set the _file-format_ option.

**Throws**

Throws [RangeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError) if value is an invalid option.

**Example**

```javascript
// Set the 'file-format' option.
Rsvim.opt.fileFormat = "unix";
```

</td>
</tr>
<tr>
<td>

`get fixEndOfLine`

</td>
<td>

`boolean`

</td>
<td>

Get the _fix-end-of-line_ option. Local to buffer.

WHen writing a file and this options is enabled, `EOL` (`LF`, `CR`, `CRLF`) at the end of file will be restored if missing. Disable this option if you want to preserve the situation from the original file.

**See**

[fileFormat](#fileformat)

**Example**

```javascript
// Get the 'fix-end-of-line' option.
const value = Rsvim.opt.fixEndOfLine;
```

</td>
</tr>
<tr>
<td>

`set fixEndOfLine`

</td>
<td>

`void`

</td>
<td>

Set the _fix-end-of-line_ option.

**Throws**

Throws [RangeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError) if value is not a boolean.

**Example**

```javascript
// Set the 'fix-end-of-line' option.
Rsvim.opt.fixEndOfLine = false;
```

</td>
</tr>
<tr>
<td>

`get lineBreak`

</td>
<td>

`boolean`

</td>
<td>

Get the _line-break_ option. This options is also known as
[word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

If `true`, Vim will wrap long lines by a word boundary rather than at the last character that fits on the screen.
It only affects the way the file is displayed, not its contents.

This option is not used when the [wrap](#wrap) option is `false`.

**Example**

```javascript
// Get the 'lineBreak' option.
const value = Rsvim.opt.lineBreak;
```

</td>
</tr>
<tr>
<td>

`set lineBreak`

</td>
<td>

`void`

</td>
<td>

Set the _line-break_ option.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not a boolean.

**Example**

```javascript
// Set the 'lineBreak' option.
Rsvim.opt.lineBreak = true;
```

</td>
</tr>
<tr>
<td>

`get shiftWidth`

</td>
<td>

`number`

</td>
<td>

Get the _shift-width_ option. Local to buffer.

When [expandTab](#expandtab) is `true`, the number of spaces that is used when inserts a
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

When [expandTab](#expandtab) is `false`, this option is not been used.

**Example**

```javascript
// Get the 'shift-width' option.
const value = Rsvim.opt.shiftWidth;
```

</td>
</tr>
<tr>
<td>

`set shiftWidth`

</td>
<td>

`void`

</td>
<td>

Set the _shift-width_ option. It only accepts an integer between `[1,255]`, if the value is out of range, it will be bound to this range.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not an integer.

**Example**

```javascript
// Set the 'shift-width' option.
Rsvim.opt.shiftWidth = 4;
```

</td>
</tr>
<tr>
<td>

`get syntaxParserLibPath`

</td>
<td>

`string`

</td>
<td>

Get the _syntax-parser-lib-path_ option. Global option.

By default the syntax parser libs are stored in `${RSVIM_CONFIG_HOME}/.tree-sitter-parsers` folder. `${RSVIM_CONFIG_HOME}` is the configuration home for rsvim.

**See**

[Rsvim Configuration](https://rsvim.github.io/docs/manual/configuration)

**Example**

```javascript
// Get the 'syntax-parser-lib-path' option.
const value = Rsvim.opt.syntaxParserLibPath;
```

</td>
</tr>
<tr>
<td>

`set syntaxParserLibPath`

</td>
<td>

`void`

</td>
<td>

Set the _syntax-parser-lib-path_ option. It only accepts a string which represents the file path on your local machine, which is used to save all compiled tree-sitter parser dynamic libraries.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not an string.

**Example**

```javascript
// Set the 'syntax-parser-lib-path' option.
Rsvim.opt.syntaxParserLibPath = ".";
```

</td>
</tr>
<tr>
<td>

`get tabStop`

</td>
<td>

`number`

</td>
<td>

Get the _tab-stop_ option. This option is also known as
[tab-size](https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size).
Local to buffer.

This option changes how text is displayed.

Defines how many columns (on the terminal) used to display the
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`). This value should be between `[1,255]`.

**Example**

```javascript
// Get the 'tab-stop' option.
const value = Rsvim.opt.tabStop;
```

</td>
</tr>
<tr>
<td>

`set tabStop`

</td>
<td>

`void`

</td>
<td>

Set the _tab-stop_ option. It only accepts an integer between `[1,255]`, if the value is out of range, it will be bound to this range.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not an integer.

**Example**

```javascript
// Set the 'tab-stop' option.
Rsvim.opt.tabStop = 4;
```

</td>
</tr>
<tr>
<td>

`get wrap`

</td>
<td>

`boolean`

</td>
<td>

Get the _wrap_ option. This option is also known as
[line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

This option changes how text is displayed.

When `true`, lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` lines will not wrap
and only part of long lines will be displayed. When the cursor is
moved to a part that is not shown, the screen will scroll horizontally.

The line will be broken in the middle of a word if necessary. See [lineBreak](#linebreak)
to get the break at a word boundary.

**Example**

```javascript
// Get the 'wrap' option.
const value = Rsvim.opt.wrap;
```

</td>
</tr>
<tr>
<td>

`set wrap`

</td>
<td>

`void`

</td>
<td>

Set the _wrap_ option.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if value is not a boolean.

**Example**

```javascript
// Set the 'wrap' option.
Rsvim.opt.wrap = true;
```

</td>
</tr>
</tbody>
</table>

## Example

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```
