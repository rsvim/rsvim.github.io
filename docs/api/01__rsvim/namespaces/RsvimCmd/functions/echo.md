```ts
function echo(message): void;
```

Echo message to the command-line.

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

`message`

</td>
<td>

`any`

</td>
<td>

It accepts string and other primitive types, except `null` and `undefined`.

</td>
</tr>
</tbody>
</table>

## Returns

`void`

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the parameter is `null` or `undefined` or no parameter provided.

## Example

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
```
