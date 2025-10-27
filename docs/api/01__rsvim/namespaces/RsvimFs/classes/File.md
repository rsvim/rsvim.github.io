The File object that access to an open file on filesystem.

## See

[RsvimFs.open](../../../classes/RsvimFs.md#open)

## Accessors

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

File is already been closed.

##### Example

```javascript
const file = await Rsvim.fs.open("README.md");
if (!file.isDisposed()) {
  file.close();
}
```

##### Returns

`boolean`

## Methods

### close()

```ts
close(): void;
```

Close the file.

#### Returns

`void`

#### Example

```javascript
const file = await Rsvim.fs.open("README.md");
// do work with the `file` object
file.close();

// Or

using file = await Rsvim.fs.open("README.md");
// do work with the `file` object
```

***

### \[dispose\]()

```ts
dispose: void;
```

Close the file with `using` without `close` API.

#### Returns

`void`

#### Example

```javascript
using file = await Rsvim.fs.open("README.md");
// do work with the `file` object
```

#### See

[close](#close)

***

### read()

```ts
read(buf): Promise<number>;
```

Read a file into a buffer.

:::warning
It is not guaranteed that the full buffer will be read in a single call.
:::

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

`buf`

</td>
<td>

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

</td>
<td>

Read bytes into buffer.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

It resolves to either the number of bytes read during the operation or `0`(EOF) if there was no more to read.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if buf is not a Uint8Array.

#### Example

```javascript
using file = await Rsvim.fs.open("README.md");
const buf = new Uint8Array(100);
const n = await file.read(buf); // read 11 bytes
const text = new TextDecoder().decode(buf); // decode into UTF-8 string "hello world"
```

***

### readSync()

```ts
readSync(buf): number;
```

Sync version of [read](#read).

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

`buf`

</td>
<td>

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

</td>
<td>

Same with [read](#read).

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

Same with [read](#read).

#### Throws

Same with [read](#read).

#### Example

```javascript
using file = await Rsvim.fs.open("README.md");
const buf = new Uint8Array(100);
const n = file.readSync(buf); // read 11 bytes
const text = new TextDecoder().decode(buf); // decode into UTF-8 string "hello world"
```

***

### write()

```ts
write(buf): Promise<number>;
```

Write a buffer into a file.

:::warning
It is not guaranteed that the full buffer will be written in a single call.
:::

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

`buf`

</td>
<td>

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

</td>
<td>

Read bytes into buffer.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

It resolves to either the number of bytes written during the operation or `0` if there was nothing to write.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if buf is not a Uint8Array.

#### Example

```javascript
using file = await Rsvim.fs.open("README.md", {write:true,create:true});
const buf = new TextEncoder().encode("hello world");
const n = await file.write(buf); // write 11 bytes
```

***

### writeSync()

```ts
writeSync(buf): number;
```

Sync version of [write](#write).

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

`buf`

</td>
<td>

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

</td>
<td>

Same with [write](#write).

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

Same with [write](#write).

#### Throws

Same with [write](#write).

#### Example

```javascript
using file = await Rsvim.fs.open("README.md", {write:true,create:true});
const buf = new TextEncoder().encode("hello world");
const n = file.writeSync(buf); // write 11 bytes
```
