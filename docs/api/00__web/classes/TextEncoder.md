Encode string text into bytes, it only supports "utf-8" encoding.

## See

[TextEncoder](https://developer.mozilla.org/docs/Web/API/TextEncoder)

## Constructors

### Constructor

```ts
new TextEncoder(): TextEncoder;
```

#### Returns

`TextEncoder`

## Accessors

### encoding

#### Get Signature

```ts
get encoding(): string;
```

The encoding used by encoder, this always returns "utf-8".

##### Returns

`string`

## Methods

### encode()

```ts
encode(input): Uint8Array;
```

Encode string text to [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

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

`input`

</td>
<td>

`string`

</td>
<td>

Text that need encode.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

Encoded uint8 bytes array.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if input is not a string.

***

### encodeInto()

```ts
encodeInto(src, dest): object;
```

Encode string text into [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array). Note: For now only `Uint8Array` is supported.

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

`src`

</td>
<td>

`string`

</td>
<td>

Text that need encode.

</td>
</tr>
<tr>
<td>

`dest`

</td>
<td>

[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

</td>
<td>

Destination that receives the encoded uint8 bytes array .

</td>
</tr>
</tbody>
</table>

#### Returns

`object`

Encode result, "read": the read Unicode code units from `src`, "written": the written UTF-8/uint8 bytes to `dest`.

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`read`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`written`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if src is not a string, or dest is not a [Uint8Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
