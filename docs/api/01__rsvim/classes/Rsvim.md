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

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="buf"></a> `buf`

</td>
<td>

`readonly`

</td>
<td>

[`RsvimBuf`](RsvimBuf.md)

</td>
</tr>
<tr>
<td>

<a id="cmd"></a> `cmd`

</td>
<td>

`readonly`

</td>
<td>

[`RsvimCmd`](RsvimCmd.md)

</td>
</tr>
<tr>
<td>

<a id="opt"></a> `opt`

</td>
<td>

`readonly`

</td>
<td>

[`RsvimOpt`](RsvimOpt.md)

</td>
</tr>
<tr>
<td>

<a id="rt"></a> `rt`

</td>
<td>

`readonly`

</td>
<td>

[`RsvimRt`](RsvimRt.md)

</td>
</tr>
</tbody>
</table>
