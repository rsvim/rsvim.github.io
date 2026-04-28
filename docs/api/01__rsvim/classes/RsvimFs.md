The `Rsvim.fs` global object for file system and file IO.

## Example

```javascript
// Create a alias to 'Rsvim.fs'.
const fs = Rsvim.fs;
```

## Methods

### open()

```ts
open(path, options?): Promise<File>;
```

Open a file and resolve to an instance of [RsvimFs.File](../namespaces/RsvimFs/classes/File.md). The file does not need to previously exist if using the `create` or `createNew` open options.
The caller have to close the file to prevent resource leaking, see [RsvimFs.File.close](../namespaces/RsvimFs/classes/File.md#close).

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

`options?`

</td>
<td>

[`OpenOptions`](../namespaces/RsvimFs/type-aliases/OpenOptions.md)

</td>
<td>

(Optional) Open options, by default is `{read: true}`. See [RsvimFs.OpenOptions](../namespaces/RsvimFs/type-aliases/OpenOptions.md).

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`File`](../namespaces/RsvimFs/classes/File.md)\>

It resolves to an instance of [RsvimFs.File](../namespaces/RsvimFs/classes/File.md).

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

&hyphen;

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

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`File`](../namespaces/RsvimFs/classes/File.md)

#### Throws

#### Example

```javascript
const file = Rsvim.fs.openSync("README.md");
```

***

### readFile()

```ts
readFile(path): Promise<Uint8Array<ArrayBufferLike>>;
```

Read a file in binary mode, i.e. into an array of bytes buffer, without open/close a file descriptor/handle.

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

File path to read.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\<`ArrayBufferLike`\>\>

It resolves to [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) that contains all the file contents as bytes array.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

#### Example

```javascript
const buffer = await Rsvim.fs.readFile("README.md");
```

***

### readFileSync()

```ts
readFileSync(path): Uint8Array;
```

The sync version of [readFile](#readfile).

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

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

#### Throws

#### Example

```javascript
const buffer = Rsvim.fs.readFileSync("README.md");
```

***

### readTextFile()

```ts
readTextFile(path): Promise<string>;
```

Read a file in text mode, i.e. into a string, without open/close a file descriptor/handle.

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

File path to read.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

It resolves to text string that contains all the file contents.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

#### Example

```javascript
const payload = await Rsvim.fs.readTextFile("README.md");
```

***

### readTextFileSync()

```ts
readTextFileSync(path): string;
```

The sync version of [readTextFile](#readtextfile).

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

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

#### Throws

#### Example

```javascript
const payload = Rsvim.fs.readTextFileSync("README.md");
```
