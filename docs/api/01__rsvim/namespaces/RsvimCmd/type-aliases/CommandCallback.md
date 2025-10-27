```ts
type CommandCallback = (ctx) => Promise<void>;
```

Command callback function, this is the backend logic that implements a user ex command.

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`ctx`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## See

[RsvimCmd.create](../../../classes/RsvimCmd.md#create)
,
