The `Rsvim.rt` global object for javascript runtime (editor process).

## Example

```javascript
// Create a alias to 'Rsvim.rt'.
const rt = Rsvim.rt;
```

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[exit](functions/exit.md)

</td>
<td>

Exit editor.

:::tip
To ensure file system data safety, editor will wait for all the ongoing file write operations
to complete before actually exiting, however any new write requests will be rejected.
:::

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `exitCode` is neither an integer nor `undefined`.

**Example**

```javascript
// Exit with default exit code `0`.
Rsvim.rt.exit();

// Exit with error exit code `-1`.
Rsvim.rt.exit(-1);
```

</td>
</tr>
</tbody>
</table>
