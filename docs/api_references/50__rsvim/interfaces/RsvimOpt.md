The `Rsvim.opt` namespace for global editor options.

## Methods

### getWrap()

```ts
getWrap(): boolean
```

Get the _wrap_ option.

Local to Window.

This option changes how text is displayed.

When `true` (on), lines longer than the width of the window will wrap and
displaying continues on the next line. When `false` (off) lines will not wrap
and only part of long lines will be displayed. When the cursor is
moved to a part that is not shown, the screen will scroll horizontally.

The line will be broken in the middle of a word if necessary. See [getLineBreak()](RsvimOpt.md#getlinebreak)
to get the break at a word boundary.

#### Returns

`boolean`

#### See

 - [Wikipedia - line wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap)
 - [Vim: options.txt - 'wrap'](https://vimhelp.org/options.txt.html#%27wrap%27)

#### Default Value

`true`.

#### Defined in

[50\_\_rsvim.ts:60](https://github.com/rsvim/rsvim/blob/71064d559cf34fd8e4f1a742d088269caba3c631/src/js/runtime/50__rsvim.ts#L60)

***

### setWrap()

```ts
setWrap(value): void
```

Set the _wrap_ option.

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

`void`

#### See

[getWrap()](RsvimOpt.md#getwrap)

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

#### Defined in

[50\_\_rsvim.ts:70](https://github.com/rsvim/rsvim/blob/71064d559cf34fd8e4f1a742d088269caba3c631/src/js/runtime/50__rsvim.ts#L70)

***

### getLineBreak()

```ts
getLineBreak(): boolean
```

Get the _line-break_ option.

Local to Window.

If `true` (on), Vim will wrap long lines at a character in 'breakat' rather
than at the last character that fits on the screen.

It only affects the way the file is displayed, not its contents.
If 'breakindent' is set, line is visually indented. Then, the value
of 'showbreak' is used to put in front of wrapped lines. This option
is not used when the [() | _wrap_](RsvimOpt.md#getwrap) option is `false`.

#### Returns

`boolean`

#### See

 - [Wikipedia - word wrap](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap)
 - [Vim: options.txt - 'linebreak'](https://vimhelp.org/options.txt.html#%27linebreak%27)

#### Default Value

`false`.

#### Defined in

[50\_\_rsvim.ts:91](https://github.com/rsvim/rsvim/blob/71064d559cf34fd8e4f1a742d088269caba3c631/src/js/runtime/50__rsvim.ts#L91)

***

### setLineBreak()

```ts
setLineBreak(value): void
```

Set the _line-break_ option.

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

`void`

#### See

[getLineBreak()](RsvimOpt.md#getlinebreak)

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if value is not a boolean value.

#### Defined in

[50\_\_rsvim.ts:101](https://github.com/rsvim/rsvim/blob/71064d559cf34fd8e4f1a742d088269caba3c631/src/js/runtime/50__rsvim.ts#L101)
