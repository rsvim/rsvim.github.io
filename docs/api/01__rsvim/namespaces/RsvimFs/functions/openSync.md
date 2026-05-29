```ts
function openSync(path, options?): File;
```

The sync version of [open](open.md).

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

&hyphen;

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`OpenOptions`](../type-aliases/OpenOptions.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

## Returns

[`File`](../classes/File.md)

## Throws

## Example

```javascript
const file = Rsvim.fs.openSync("README.md");
```
