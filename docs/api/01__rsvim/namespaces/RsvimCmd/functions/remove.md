```ts
function remove(name): CommandDefinition;
```

Remove an ex command by name.

:::warning
The builtin command `js` cannot be removed.
:::

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

`name`

</td>
<td>

`string`

</td>
<td>

The command name to be removed.

</td>
</tr>
</tbody>
</table>

## Returns

[`CommandDefinition`](../type-aliases/CommandDefinition.md)

Returns the removed [RsvimCmd.CommandDefinition](../type-aliases/CommandDefinition.md), or `undefined` if no command is been removed.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if name is not a string.

## Example

```javascript
Rsvim.cmd.list().forEach((cmd) => {
  // Remove all registered commands.
  Rsvim.cmd.remove(cmd.name);
});
```
