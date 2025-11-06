## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[CommandAttributes](type-aliases/CommandAttributes.md)

</td>
<td>

Command attributes.

**See**

[RsvimCmd.create](../../classes/RsvimCmd.md#create)

</td>
</tr>
<tr>
<td>

[CommandCallback](type-aliases/CommandCallback.md)

</td>
<td>

Command callback function, this is the backend logic that implements a user ex command.

It accepts a `ctx` parameter that indicates runtime information when the command is executed.

**See**

 - [RsvimCmd.create](../../classes/RsvimCmd.md#create)
 - [CommandContext](type-aliases/CommandContext.md)
,

</td>
</tr>
<tr>
<td>

[CommandContext](type-aliases/CommandContext.md)

</td>
<td>

Command runtime context.

When a command is been execute, runtime information will be passed to the command callback function.

</td>
</tr>
<tr>
<td>

[CommandDefinition](type-aliases/CommandDefinition.md)

</td>
<td>

Command definition.

</td>
</tr>
<tr>
<td>

[CommandOptions](type-aliases/CommandOptions.md)

</td>
<td>

Command options when creating a command.

**See**

[RsvimCmd.create](../../classes/RsvimCmd.md#create)

</td>
</tr>
</tbody>
</table>
