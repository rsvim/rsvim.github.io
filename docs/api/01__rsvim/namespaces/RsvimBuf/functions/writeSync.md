```ts
function writeSync(bufId): number;
```

Write (save) buffer's text contents to local filesystem synchronizely.

## Parameters

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

## Returns

`number`

It returns a positive integer to indicate how many bytes
have been written to the file, if written successfully.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the parameter is invalid, or [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to write buffer to file system.

## Example

```javascript
const bufId = Rsvim.buf.currentBufferId();
try {
  const bytes = Rsvim.buf.writeSync(bufId);
  Rsvim.cmd.echo(`Buffer ${bufId} has been saved, ${bytes} bytes written`);
} catch (e) {
  Rsvim.cmd.echo(`Error: failed to save buffer ${bufId}, exception: ${e}`);
}
```
