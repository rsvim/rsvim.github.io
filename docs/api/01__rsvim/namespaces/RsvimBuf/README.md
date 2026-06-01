The `Rsvim.buf` global object for Vim buffers.

## Example

```javascript
// Create a alias to 'Rsvim.buf'.
const buf = Rsvim.buf;
```

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[current](functions/current.md)

</td>
<td>

Get current buffer's ID.

The "current" buffer is the buffer that the window where your cursor is
located is binded to.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return `undefined`. Once the editor is initialized, there will always have a
valid buffer binded to the "current" window (where your cursor is). It will return
the valid buffer ID.
:::

**Example**

```javascript
const bufId = Rsvim.buf.current();
```

</td>
</tr>
<tr>
<td>

[list](functions/list.md)

</td>
<td>

List all buffers' IDs.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return an empty array. Once the editor is initialized, there will have at least 1
buffer binded to the "current" window (where your cursor is). It will return all the
buffer IDs as an array.
:::

**Example**

```javascript
const bufIds = Rsvim.buf.list();
```

</td>
</tr>
<tr>
<td>

[writeSync](functions/writeSync.md)

</td>
<td>

Write (save) buffer's text contents to local filesystem synchronizely.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the parameter is invalid, or [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to write buffer to file system.

**Example**

```javascript
const bufId = Rsvim.buf.currentBufferId();
try {
  const bytes = Rsvim.buf.writeSync(bufId);
  Rsvim.cmd.echo(`Buffer ${bufId} has been saved, ${bytes} bytes written`);
} catch (e) {
  Rsvim.cmd.echo(`Error: failed to save buffer ${bufId}, exception: ${e}`);
}
```

</td>
</tr>
</tbody>
</table>
