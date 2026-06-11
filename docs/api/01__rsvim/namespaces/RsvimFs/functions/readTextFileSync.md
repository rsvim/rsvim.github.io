```ts
function readTextFileSync(path): string;
```

Sync version of [readTextFile](readTextFile.md).

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

`string`

## Example

```javascript
const payload = Rsvim.fs.readTextFileSync("README.md");
```
