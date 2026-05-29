```ts
function readTextFileSync(path): string;
```

The sync version of [readTextFile](readTextFile.md).

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
</tbody>
</table>

## Returns

`string`

## Throws

## Example

```javascript
const payload = Rsvim.fs.readTextFileSync("README.md");
```
