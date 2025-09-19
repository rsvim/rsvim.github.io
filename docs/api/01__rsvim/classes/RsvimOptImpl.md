**`Hideconstructor`**

The `Rsvim.opt` global object for global editor options.

## Example

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

## Implements

- [`RsvimOpt`](../interfaces/RsvimOpt.md)

## Constructors

### Constructor

```ts
new RsvimOptImpl(): RsvimOptImpl;
```

#### Returns

`RsvimOptImpl`

## Accessors

### expandTab

#### Get Signature

```ts
get expandTab(): boolean;
```

Get the _expand-tab_ option. Local to buffer.

When in insert mode, inserts [spaces](https://en.wikipedia.org/wiki/Whitespace_character) (ASCII `32`)
instead of a [horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

See [shiftWidth](../interfaces/RsvimOpt.md#shiftwidth) to get the number of spaces when inserting.

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

Get the _expand-tab_ option. Local to buffer.

When in insert mode, inserts [spaces](https://en.wikipedia.org/wiki/Whitespace_character) (ASCII `32`)
instead of a [horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

See [shiftWidth](../interfaces/RsvimOpt.md#shiftwidth) to get the number of spaces when inserting.

##### Default Value

`false`

##### Example

```javascript
// Get the 'expand-tab' option.
const value = Rsvim.opt.expandTab;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`expandTab`](../interfaces/RsvimOpt.md#expandtab)

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

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`fileEncoding`](../interfaces/RsvimOpt.md#fileencoding)

***

### fileFormat

#### Get Signature

```ts
get fileFormat(): "dos" | "unix" | "mac";
```

Get the _file-format_ option. Local to buffer.

Sets the [line end](https://en.wikipedia.org/wiki/Newline) for the buffer. There are 3 kinds of line end:
- `CRLF`: used by [Windows](https://www.microsoft.com/windows).
- `LF`: used by [Linux](https://en.wikipedia.org/wiki/Linux) and [Unix](https://en.wikipedia.org/wiki/Unix) (include [MacOS](https://www.apple.com/macos/)).
- `CR`: used by [classic MacOS](https://en.wikipedia.org/wiki/Classic_Mac_OS).

:::warning
Today's Mac also uses `LF` as line end, you should never use `CR` any more.
:::

:::note
In fact this option should be named to "line-end", "file-format" is just to be consistent
with Vim's [fileformat](https://vimhelp.org/options.txt.html#%27fileformat%27).
:::

For this option, it has below choices:
- `"dos"`: equivalent to `CRLF` line end.
- `"unix"`: equivalent to `LF` line end.
- `"mac"`: equivalent to `CR` line end.

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

Get the _file-format_ option. Local to buffer.

Sets the [line end](https://en.wikipedia.org/wiki/Newline) for the buffer. There are 3 kinds of line end:
- `CRLF`: used by [Windows](https://www.microsoft.com/windows).
- `LF`: used by [Linux](https://en.wikipedia.org/wiki/Linux) and [Unix](https://en.wikipedia.org/wiki/Unix) (include [MacOS](https://www.apple.com/macos/)).
- `CR`: used by [classic MacOS](https://en.wikipedia.org/wiki/Classic_Mac_OS).

:::warning
Today's Mac also uses `LF` as line end, you should never use `CR` any more.
:::

:::note
In fact this option should be named to "line-end", "file-format" is just to be consistent
with Vim's [fileformat](https://vimhelp.org/options.txt.html#%27fileformat%27).
:::

For this option, it has below choices:
- `"dos"`: equivalent to `CRLF` line end.
- `"unix"`: equivalent to `LF` line end.
- `"mac"`: equivalent to `CR` line end.

##### Default Value

`"dos"` for Windows/MS-DOS, `"unix"` for Linux/Unix/MacOS.

##### Example

```javascript
// Get the 'file-format' option.
const value = Rsvim.opt.fileFormat;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`fileFormat`](../interfaces/RsvimOpt.md#fileformat)

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

This option is not used when the [wrap](../interfaces/RsvimOpt.md#wrap) option is `false`.

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

Get the _line-break_ option. This options is also known as
[word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

If `true`, Vim will wrap long lines by a word boundary rather than at the last character that fits on the screen.
It only affects the way the file is displayed, not its contents.

This option is not used when the [wrap](../interfaces/RsvimOpt.md#wrap) option is `false`.

##### Default Value

`false`

##### Example

```javascript
// Get the 'lineBreak' option.
const value = Rsvim.opt.lineBreak;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`lineBreak`](../interfaces/RsvimOpt.md#linebreak)

***

### shiftWidth

#### Get Signature

```ts
get shiftWidth(): number;
```

Get the _shift-width_ option. Local to buffer.

When [expandTab](../interfaces/RsvimOpt.md#expandtab) is `true`, the number of spaces that is used when inserts a
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

When [expandTab](../interfaces/RsvimOpt.md#expandtab) is `false`, this option is not been used.

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

Get the _shift-width_ option. Local to buffer.

When [expandTab](../interfaces/RsvimOpt.md#expandtab) is `true`, the number of spaces that is used when inserts a
[horizontal tab](https://en.wikipedia.org/wiki/Tab_key) (ASCII `9`).

When [expandTab](../interfaces/RsvimOpt.md#expandtab) is `false`, this option is not been used.

##### Default Value

`8`

##### Example

```javascript
// Get the 'shift-width' option.
const value = Rsvim.opt.shiftWidth;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`shiftWidth`](../interfaces/RsvimOpt.md#shiftwidth)

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

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`tabStop`](../interfaces/RsvimOpt.md#tabstop)

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

The line will be broken in the middle of a word if necessary. See [lineBreak](../interfaces/RsvimOpt.md#linebreak)
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

Get the _wrap_ option. This option is also known as
[line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap). Local to window.

This option changes how text is displayed.

When `true`, lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` lines will not wrap
and only part of long lines will be displayed. When the cursor is
moved to a part that is not shown, the screen will scroll horizontally.

The line will be broken in the middle of a word if necessary. See [lineBreak](../interfaces/RsvimOpt.md#linebreak)
to get the break at a word boundary.

##### Default Value

`true`

##### Example

```javascript
// Get the 'wrap' option.
const value = Rsvim.opt.wrap;
```

##### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

##### Returns

`void`

#### Implementation of

[`RsvimOpt`](../interfaces/RsvimOpt.md).[`wrap`](../interfaces/RsvimOpt.md#wrap)
