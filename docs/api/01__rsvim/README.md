---
title: Rsvim API
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

&hyphen;

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
<tr>
<td>

[RsvimOpt](namespaces/RsvimOpt/README.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>
