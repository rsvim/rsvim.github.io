The `Rsvim.opt` global object for global editor options.

## Example

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

## Accessors

### lineBreak

#### Get Signature

```ts
get lineBreak(): boolean;
```

Get the _line-break_ option. This options is also known as [word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap).

Local to Window.

If `true` (on), Vim will wrap long lines by a word boundary rather than at the last character that fits on the screen.
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

### wrap

#### Get Signature

```ts
get wrap(): boolean;
```

Get the _wrap_ option. This option is also known as [line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap).

Local to Window.

This option changes how text is displayed.

When `true` (on), lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` (off) lines will not wrap
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
