The `Rsvim` global object, it contains two groups:

- General APIs.
- Editor APIs.

## Editor APIs

These APIs are specific for editor, such as buffers, windows, key mappings, etc.

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[RsvimBuf](classes/RsvimBuf.md)

</td>
<td>

The `Rsvim.buf` global object for Vim buffers.

**Example**

```javascript
// Create a alias to 'Rsvim.buf'.
const buf = Rsvim.buf;
```

</td>
</tr>
<tr>
<td>

[RsvimCmd](classes/RsvimCmd.md)

</td>
<td>

The `Rsvim.cmd` global object for Ex commands.

:::tip
The "ex command" mostly describes the product function, i.e. when user types ":" in normal mode,
user can move cursor to command-line and input commands. Rather than referring to the
["ex commands"](https://vimhelp.org/intro.txt.html#Ex-mode) in Vim editor.
:::

**Example**

```javascript
// Create a alias to 'Rsvim.cmd'.
const cmd = Rsvim.cmd;
```

</td>
</tr>
<tr>
<td>

[RsvimOpt](classes/RsvimOpt.md)

</td>
<td>

The `Rsvim.opt` global object for global editor options.

**Example**

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

</td>
</tr>
</tbody>
</table>

## General APIs

These APIs are general for common javascript-based runtime, similar to [Deno APIs](https://docs.deno.com/api/deno/).

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[RsvimRt](classes/RsvimRt.md)

</td>
<td>

The `Rsvim.rt` global object for javascript runtime (editor process).

**Example**

```javascript
// Create a alias to 'Rsvim.rt'.
const rt = Rsvim.rt;
```

</td>
</tr>
</tbody>
</table>

## Global Object

The global object.

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[Rsvim](classes/Rsvim.md)

</td>
<td>

The `Rsvim` global object, it contains multiple sub fields:

- `Rsvim.buf`: Buffer APIs.
- `Rsvim.cmd`: Ex command APIs.
- `Rsvim.opt`: Global options.
- `Rsvim.rt`: JavaScript runtime (editor process) APIs.

**Example**

```javascript
// Create a alias to 'Rsvim'.
const vim = Rsvim;
```

</td>
</tr>
</tbody>
</table>
