```ts
function reportError(error): void;
```

Dispatch an uncaught exception. Similar to synchronous version of `setTimeout(() => {throw error;}, 0);`.

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

`error`

</td>
<td>

`any`

</td>
<td>

Anything to be thrown.

</td>
</tr>
</tbody>
</table>

## Returns

`void`
