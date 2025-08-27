The `Rsvim.buf` global object for Vim buffers.

## Example

```javascript
// Create a alias to 'Rsvim.buf'.
const buf = Rsvim.buf;
```

## Methods

### current()

```ts
current(): number;
```

Get current buffer's ID.

The "current" buffer is the buffer that the window where your cursor is
located is binded to.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return `null`. Once the editor is initialized, there will always have a
valid buffer binded to the "current" window (where your cursor is). It will return
the valid buffer ID.
:::

#### Returns

`number`

It returns a valid buffer ID if the editor is initialized.
Otherwise it returns `null` if the editor is not initialized.

#### Example

```javascript
const bufId = Rsvim.buf.current();
```

***

### list()

```ts
list(): number[];
```

List all buffers' IDs.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return an empty array. Once the editor is initialized, there will have at least 1
buffer binded to the "current" window (where your cursor is). It will return all the
buffer IDs as an array.
:::

#### Returns

`number`[]

All the buffers' IDs as an array. If there's no
buffer (i.e. the editor is not initialized), it returns an empty array.

#### Example

```javascript
const bufIds = Rsvim.buf.list();
```

***

### writeSync()

```ts
writeSync(bufId): number;
```

Write (save) buffer's text contents to local filesystem synchronizely.

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

`bufId`

</td>
<td>

`number`

</td>
<td>

The buffer's ID that you want to write to filesystem.

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

It returns a positive integer to indicate how many bytes
have been written to the file, if written successfully.

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to write buffer contents to file system.

#### Example

```javascript
const bufId = Rsvim.buf.currentBufferId();
try {
  const bytes = Rsvim.buf.writeSync(bufId);
  Rsvim.cmd.echo(`Buffer ${bufId} has been saved, ${bytes} bytes written`);
} catch (e) {
  Rsvim.cmd.echo(`Error: failed to save buffer ${bufId}, exception: ${e}`);
}
```
