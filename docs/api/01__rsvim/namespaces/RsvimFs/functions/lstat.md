```ts
function lstat(path): Promise<FileInfo>;
```

Get the status of a file by path.

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FileInfo`](../type-aliases/FileInfo.md)\>

It resolves to the file status.

## See

[RsvimFs.stat](stat.md)

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

## Example

```javascript
const fstat = await Rsvim.fs.lstat("README.md");
```
