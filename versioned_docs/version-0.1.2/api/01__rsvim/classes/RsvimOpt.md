The `Rsvim.opt` global object for global editor options.

## Example

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

## Accessors

### expandTab

#### Get Signature

```ts
get expandTab(): boolean;
```

Get the _expand-tab_ option. Local to buffer.

When in insert mode, inserts [spaces](https://en.wikipedia.org/wiki/Whitespace_character) (ASCII `32`)
instead of a [horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

See [shiftWidth](#shiftwidth) to get the number of spaces when inserting.

##### Default Value

`false`

##### Example

```javascript
// Get the 'expand-tab' option.
const value = Rsvim.opt.expandTab;
```

##### Returns

`boolean`

#### Set Signature

```ts
set expandTab(value): void;
```

Set the _expand-tab_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

##### Example

```javascript
// Set the 'expand-tab' option.
Rsvim.opt.expandTab = true;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`boolean`

</td>
<td>

The _expand-tab_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### fileEncoding

#### Get Signature

```ts
get fileEncoding(): "utf-8";
```

Get the _file-encoding_ option. Local to buffer.

Sets the [character encoding](https://en.wikipedia.org/wiki/Character_encoding) for the file of this buffer.
This will determine which character encoding is used when RSVIM read/write a file from file system.

:::warning
For now, only **utf-8** encoding is supported.
:::

##### Default Value

`"utf-8"`

##### Example

```javascript
// Get the 'file-encoding' option.
const value = Rsvim.opt.fileEncoding;
```

##### Returns

`"utf-8"`

#### Set Signature

```ts
set fileEncoding(value): void;
```

Set the _file-encoding_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a valid option.

##### Example

```javascript
// Set the 'file-encoding' option.
Rsvim.opt.fileEncoding = "utf-8";
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`"utf-8"`

</td>
<td>

The _file-encoding_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### fileFormat

#### Get Signature

```ts
get fileFormat(): "dos" | "unix" | "mac";
```

Get the _file-format_ option. Local to buffer.

Sets the [line end](https://en.wikipedia.org/wiki/Newline) for the file of this buffer. There are 3 kinds of line end:
- `CRLF`: used by [Windows](https://www.microsoft.com/windows).
- `LF`: used by [Linux](https://en.wikipedia.org/wiki/Linux) and [Unix](https://en.wikipedia.org/wiki/Unix) (include [MacOS](https://www.apple.com/macos/)).
- `CR`: used by [classic MacOS](https://en.wikipedia.org/wiki/Classic_Mac_OS). Today's Mac also uses `LF` as line end, you would never use `CR` any more.

:::note
In fact it should be named to "line-end", it is called "file-format" just to be consistent
with Vim's [fileformat](https://vimhelp.org/options.txt.html#%27fileformat%27) option.
:::

For this API, it has below options:
- `"dos"`: equivalent to `CRLF` line end.
- `"unix"`: equivalent to `LF` line end.
- `"mac"`: equivalent to `CR` line end. You would never use it today.

##### Default Value

`"dos"` for Windows/MS-DOS, `"unix"` for Linux/Unix/MacOS.

##### Example

```javascript
// Get the 'file-format' option.
const value = Rsvim.opt.fileFormat;
```

##### Returns

`"dos"` \| `"unix"` \| `"mac"`

#### Set Signature

```ts
set fileFormat(value): void;
```

Set the _file-format_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a valid option.

##### Example

```javascript
// Set the 'file-format' option.
Rsvim.opt.fileFormat = "unix";
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`"dos"` \| `"unix"` \| `"mac"`

</td>
<td>

The _file-format_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### lineBreak

#### Get Signature

```ts
get lineBreak(): boolean;
```

Get the _line-break_ option. This options is also known as
[word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

If `true`, Vim will wrap long lines by a word boundary rather than at the last character that fits on the screen.
It only affects the way the file is displayed, not its contents.

This option is not used when the [wrap](#wrap) option is `false`.

##### Default Value

`false`

##### Example

```javascript
// Get the 'lineBreak' option.
const value = Rsvim.opt.lineBreak;
```

##### Returns

`boolean`

#### Set Signature

```ts
set lineBreak(value): void;
```

Set the _line-break_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

##### Example

```javascript
// Set the 'lineBreak' option.
Rsvim.opt.lineBreak = true;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`boolean`

</td>
<td>

The _line-break_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### shiftWidth

#### Get Signature

```ts
get shiftWidth(): number;
```

Get the _shift-width_ option. Local to buffer.

When [expandTab](#expandtab) is `true`, the number of spaces that is used when inserts a
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

When [expandTab](#expandtab) is `false`, this option is not been used.

##### Default Value

`8`

##### Example

```javascript
// Get the 'shift-width' option.
const value = Rsvim.opt.shiftWidth;
```

##### Returns

`number`

#### Set Signature

```ts
set shiftWidth(value): void;
```

Set the _expand-tab_ option. This value should be between `[1,255]`.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a positive integer that between `[1,255]`.

##### Example

```javascript
// Set the 'shift-width' option.
Rsvim.opt.shiftWidth = 4;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`number`

</td>
<td>

The _expand-tab_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### tabStop

#### Get Signature

```ts
get tabStop(): number;
```

Get the _tab-stop_ option. This option is also known as
[tab-size](https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size).
Local to buffer.

This option changes how text is displayed.

Defines how many columns (on the terminal) used to display the
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`). This value should be between `[1,255]`.

##### Default Value

`8`

##### Example

```javascript
// Get the 'tab-stop' option.
const value = Rsvim.opt.tabStop;
```

##### Returns

`number`

#### Set Signature

```ts
set tabStop(value): void;
```

Set the _tab-stop_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a positive integer that between `[1,255]`.

##### Example

```javascript
// Set the 'tab-stop' option.
Rsvim.opt.tabStop = 4;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`number`

</td>
<td>

The _tab-stop_ option. It only accepts an integer between `[1,255]`.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

***

### wrap

#### Get Signature

```ts
get wrap(): boolean;
```

Get the _wrap_ option. This option is also known as
[line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

This option changes how text is displayed.

When `true`, lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` lines will not wrap
and only part of long lines will be displayed. When the cursor is
moved to a part that is not shown, the screen will scroll horizontally.

The line will be broken in the middle of a word if necessary. See [lineBreak](#linebreak)
to get the break at a word boundary.

##### Default Value

`true`

##### Example

```javascript
// Get the 'wrap' option.
const value = Rsvim.opt.wrap;
```

##### Returns

`boolean`

#### Set Signature

```ts
set wrap(value): void;
```

Set the _wrap_ option.

##### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

##### Example

```javascript
// Set the 'wrap' option.
Rsvim.opt.wrap = true;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`

</td>
<td>

`boolean`

</td>
<td>

The _wrap_ option.

</td>
</tr>
</tbody>
</table>

##### Returns

`void`
