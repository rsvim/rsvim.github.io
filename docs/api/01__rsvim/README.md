---
title: Rsvim APIs
sidebar_position: 2
---

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

[RsvimFs](classes/RsvimFs.md)

</td>
<td>

The `Rsvim.fs` global object for file system and file IO.

**Example**

```javascript
// Create a alias to 'Rsvim.fs'.
const fs = Rsvim.fs;
```

</td>
</tr>
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

The `Rsvim` global object.

**Example**

```javascript
// Create a alias to 'Rsvim'.
const vim = Rsvim;
```

</td>
</tr>
</tbody>
</table>

## Other

<table>
<thead>
<tr>
<th>Namespace</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[RsvimCmd](namespaces/RsvimCmd/README.md)

</td>
<td>

---
title: RsvimCmd
---

</td>
</tr>
<tr>
<td>

[RsvimFs](namespaces/RsvimFs/README.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>
