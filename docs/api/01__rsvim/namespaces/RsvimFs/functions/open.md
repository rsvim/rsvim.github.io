```ts
function open(path, options?): Promise<File>;
```

Open a file and resolve to an instance of [RsvimFs.File](../classes/File.md). The file does not need to previously exist if using the `create` or `createNew` open options.
The caller have to close the file to prevent resource leaking, see [RsvimFs.File.close](../classes/File.md#close).

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
<tr>
<td>

`options?`

</td>
<td>

[`OpenOptions`](../type-aliases/OpenOptions.md)

</td>
<td>

(Optional) Open options, by default is `{read: true}`. See [RsvimFs.OpenOptions](../type-aliases/OpenOptions.md).

</td>
</tr>
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`File`](../classes/File.md)\>

It resolves to an instance of [RsvimFs.File](../classes/File.md).

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to open/create the file.

## Example

```javascript
const file = await Rsvim.fs.open("README.md");
```
