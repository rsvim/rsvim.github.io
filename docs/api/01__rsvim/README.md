The `Rsvim` global object, it contains two groups:

- General APIs.
- Editor APIs.

## Editor APIs

These APIs are specific for editor, such as buffers, windows, key mappings, etc.

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[RsvimOpt](classes/RsvimOpt.md)

</td>
<td>

The `Rsvim.opt` global object for global editor options.

**Example**

```javascript
// Create a alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

</td>
</tr>
</tbody>
</table>

## Global Object

The global object.

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[Rsvim](classes/Rsvim.md)

</td>
<td>

The `Rsvim` global object, it contains multiple sub fields:

- `Rsvim.opt`: Global editor options.

**Example**

```javascript
// Create a alias to 'Rsvim'.
const vim = Rsvim;
```

</td>
</tr>
</tbody>
</table>
