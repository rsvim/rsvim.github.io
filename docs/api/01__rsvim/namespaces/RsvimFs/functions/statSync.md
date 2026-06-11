```ts
function statSync(path): FileInfo;
```

Sync version of [stat](stat.md).

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
const fstat = Rsvim.fs.statSync("README.md");
```
