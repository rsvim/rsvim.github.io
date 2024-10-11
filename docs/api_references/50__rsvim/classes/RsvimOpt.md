The `Rsvim.opt` object for global editor options.

## Accessors

### wrap

```ts
get wrap(): boolean
```

Get the _wrap_ option.

Local to [Window](https://developer.mozilla.org/docs/Web/API/Window).

This option changes how text is displayed.

When `true` (on), lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` (off) lines will not wrap
and only part of long lines will be displayed. When the cursor is
moved to a part that is not shown, the screen will scroll horizontally.

The line will be broken in the middle of a word if necessary. See getLineBreak | getLineBreak()
to get the break at a word boundary.

#### See

 - [Wikipedia - line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap)
 - [Vim: options.txt - 'wrap'](https://vimhelp.org/options.txt.html#%27wrap%27)

#### Default Value

`true`

```ts
set wrap(value): void
```

Set the _wrap_ option.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

#### Parameters

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

#### Returns

`boolean`

***

### lineBreak

```ts
get lineBreak(): boolean
```

Get the _line-break_ option.

Local to [Window](https://developer.mozilla.org/docs/Web/API/Window).

If `true` (on), Vim will wrap long lines at a character in 'breakat' rather
than at the last character that fits on the screen.

It only affects the way the file is displayed, not its contents.
If 'breakindent' is set, line is visually indented. Then, the value
of 'showbreak' is used to put in front of wrapped lines. This option
is not used when the getWrap() | _wrap_ option is `false`.

#### See

 - [Wikipedia - word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap)
 - [Vim: options.txt - 'linebreak'](https://vimhelp.org/options.txt.html#%27linebreak%27)

#### Default Value

`false`

```ts
set lineBreak(value): void
```

Set the _line-break_ option.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

#### Parameters

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

#### Returns

`boolean`
