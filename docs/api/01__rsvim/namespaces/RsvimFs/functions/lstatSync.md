```ts
function lstatSync(path): FileInfo;
```

Sync version of `lstat`.

:::note
This api doesn't follow symbolic link.
:::

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

`path`

</td>
<td>

`string`

</td>
<td>

File path.

</td>
</tr>
</tbody>
</table>

## Returns

[`FileInfo`](../type-aliases/FileInfo.md)

It returns the file status.

## See

[RsvimFs.lstat](lstat.md)

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

## Example

```javascript
const fstat = Rsvim.fs.lstatSync("README.md");
```
