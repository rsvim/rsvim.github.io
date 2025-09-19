The `Rsvim` global object, it contains multiple sub fields:

- `Rsvim.buf`: Buffer APIs.
- `Rsvim.cmd`: Ex command APIs.
- `Rsvim.opt`: Global options.
- `Rsvim.rt`: JavaScript runtime (editor process) APIs.

## Example

```javascript
// Create a alias to 'Rsvim'.
const vim = Rsvim;
```

## Implements

- [`Rsvim`](../interfaces/Rsvim.md)

## Constructors

### Constructor

```ts
new RsvimImpl(): RsvimImpl;
```

#### Returns

`RsvimImpl`

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="buf"></a> `buf`

</td>
<td>

[`RsvimBufImpl`](RsvimBufImpl.md)

</td>
</tr>
<tr>
<td>

<a id="cmd"></a> `cmd`

</td>
<td>

[`RsvimCmdImpl`](RsvimCmdImpl.md)

</td>
</tr>
<tr>
<td>

<a id="opt"></a> `opt`

</td>
<td>

[`RsvimOptImpl`](RsvimOptImpl.md)

</td>
</tr>
<tr>
<td>

<a id="rt"></a> `rt`

</td>
<td>

[`RsvimRtImpl`](RsvimRtImpl.md)

</td>
</tr>
</tbody>
</table>
