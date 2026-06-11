```ts
function openSync(path, options?): File;
```

Sync version of [open](open.md).

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
<tr>
<td>

`options?`

</td>
<td>

[`OpenOptions`](../type-aliases/OpenOptions.md)

</td>
</tr>
</tbody>
</table>

## Returns

[`File`](../classes/File.md)

## Example

```javascript
const file = Rsvim.fs.openSync("README.md");
```
