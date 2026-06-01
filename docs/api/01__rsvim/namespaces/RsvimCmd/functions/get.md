```ts
function get(name): CommandDefinition;
```

Get ex command definition by name.

:::warning
The builtin `js` command cannot be get.
:::

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

`name`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

## Returns

[`CommandDefinition`](../type-aliases/CommandDefinition.md)

Returns command definition by its name, except the `js` command.

## Example

```javascript
const def = Rsvim.cmd.get("write");
Rsvim.cmd.echo(`Command: ${def.name}`);
```
