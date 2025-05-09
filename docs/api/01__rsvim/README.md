The global namespace for `Rsvim` specific, non-standard runtime APIs.

## See

 - [Vim: help.txt](https://vimhelp.org/)
 - [Neovim docs - Api](https://neovim.io/doc/user/api.html)
 - [Deno APIs](https://docs.deno.com/api/deno/)

## Editor APIs

These APIs are specific for Rsvim editors such as buffers, windows, key mappings, etc.

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

The `Rsvim.opt` object for global editor options.

**Example**

```javascript
// Create a variable alias to 'Rsvim.opt'.
const opt = Rsvim.opt;
```

</td>
</tr>
</tbody>
</table>

## Global Object

The global namespace.

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
// Create a variable alias to 'Rsvim'.
const vim = Rsvim;
```

</td>
</tr>
</tbody>
</table>
