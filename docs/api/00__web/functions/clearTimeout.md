```ts
function clearTimeout(id): void;
```

Cancel a timeout previously established by calling [setTimeout](setTimeout.md).

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

`id`

</td>
<td>

`number`

</td>
<td>

The ID (integer) which identifies the timer.

</td>
</tr>
</tbody>
</table>

## Returns

`void`

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if ID is not an integer.
