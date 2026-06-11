```ts
function readFileSync(path): Uint8Array;
```

Sync version of [readFile](readFile.md).

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

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

## Example

```javascript
const buffer = Rsvim.fs.readFileSync("README.md");
```
