```ts
function lstatSync(path): FileInfo;
```

Sync version of [lstat](lstat.md).

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
</tbody>
</table>

## Returns

[`FileInfo`](../type-aliases/FileInfo.md)

## Example

```javascript
const fstat = Rsvim.fs.lstatSync("README.md");
```
