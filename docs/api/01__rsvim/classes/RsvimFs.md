The `Rsvim.fs` global object for file system and file IO.

## Example

```javascript
// Create a alias to 'Rsvim.fs'.
const fs = Rsvim.fs;
```

## Methods

### open()

```ts
open(path, options): Promise<File>;
```

Open a file and resolve to an instance of [RsvimFs.File](../namespaces/RsvimFs/classes/File.md). The file does not need to previously exist if using the `create` or `createNew` open options.
The caller have to close the file to prevent resource leaking, see close.

#### Parameters

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

`options`

</td>
<td>

[`OpenOptions`](../namespaces/RsvimFs/type-aliases/OpenOptions.md)

</td>
<td>

Open options, by default is `{read: true}`. See [RsvimFs.OpenOptions](../namespaces/RsvimFs/type-aliases/OpenOptions.md).

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`File`](../namespaces/RsvimFs/classes/File.md)\>

It returns a [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to an instance of [RsvimFs.File](../namespaces/RsvimFs/classes/File.md).

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to open/create the file.

#### Example

```javascript
const file = await Rsvim.fs.open("README.md");
```

***

### openSync()

```ts
openSync(path, options?): File;
```

The sync version of [open](#open).

#### Parameters

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

Same with [open](#open).

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`OpenOptions`](../namespaces/RsvimFs/type-aliases/OpenOptions.md)

</td>
<td>

Same with [open](#open).

</td>
</tr>
</tbody>
</table>

#### Returns

[`File`](../namespaces/RsvimFs/classes/File.md)

It returns a [RsvimFs.File](../namespaces/RsvimFs/classes/File.md).

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to open/create the file.

#### Example

```javascript
const file = Rsvim.fs.openSync("README.md");
```
