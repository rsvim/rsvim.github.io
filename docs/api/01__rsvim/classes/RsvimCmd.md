The `Rsvim.cmd` global object for Ex commands.

## Example

```javascript
// Create a alias to 'Rsvim.cmd'.
const cmd = Rsvim.cmd;
```

## Methods

### create()

```ts
create(
   name, 
   callback, 
   attributes?, 
   options?): CommandDefinition;
```

Create a ex command with a callback function.

:::warning
The builtin command `js` cannot be override.
:::

#### Parameters

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

Command name that is going to create. Only letters (`a-z` and `A-Z`), digits (`0-9`), underscore (`_`) and exclamation (`!`) are allowed in a command name. Command name must not begin with a digit.

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

[`CommandCallback`](../namespaces/RsvimCmd/type-aliases/CommandCallback.md)

</td>
<td>

Async callback function that implements the command. It accepts an `ctx` parameter that contains all the information when user is running it. See [RsvimCmd.CommandCallback](../namespaces/RsvimCmd/type-aliases/CommandCallback.md).

</td>
</tr>
<tr>
<td>

`attributes?`

</td>
<td>

[`CommandAttributes`](../namespaces/RsvimCmd/type-aliases/CommandAttributes.md)

</td>
<td>

(Optional) Attributes that control the command behavior, by default is `{bang:false, nargs:"0"}`, see [RsvimCmd.CommandAttributes](../namespaces/RsvimCmd/type-aliases/CommandAttributes.md).

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`CommandOptions`](../namespaces/RsvimCmd/type-aliases/CommandOptions.md)

</td>
<td>

(Optional) Options that control how the command is created, by default is `{force:true}`, see [RsvimCmd.CommandOptions](../namespaces/RsvimCmd/type-aliases/CommandOptions.md).

</td>
</tr>
</tbody>
</table>

#### Returns

[`CommandDefinition`](../namespaces/RsvimCmd/type-aliases/CommandDefinition.md)

It returns `undefined` is the command is newly created. Or it returns a command definition that was defined previously.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if command name or alias already exists, but `force` option is not set to override existing command forcibly.

#### Example

```javascript
async function write(ctx: RsvimCmd.CommandContext): void {
  try {
    const bytes = Rsvim.buf.writeSync(ctx.currentBufferId);

    // Call other async APIs
    const file = await Rsvim.fs.open("message.txt");
    const buffer = new Uint8Array(100);
    const read = await file.read(buffer);
    const message = new TextDecoder().decode(buffer);

    Rsvim.cmd.echo(`Buffer ${bufId} has been saved, ${bytes} bytes written with message: ${message}`);
  } catch (e) {
    Rsvim.cmd.echo(`Error: failed to save buffer ${bufId}, exception: ${e}`);
  }
}
Rsvim.cmd.create("write", write);
```

***

### echo()

```ts
echo(message): void;
```

Echo message to the command-line.

#### Parameters

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

#### Returns

`void`

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the parameter is `null` or `undefined` or no parameter provided.

#### Example

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
```

***

### get()

```ts
get(name): CommandDefinition;
```

Get ex command definition by name.

:::warning
The builtin `js` command cannot be get.
:::

#### Parameters

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

#### Returns

[`CommandDefinition`](../namespaces/RsvimCmd/type-aliases/CommandDefinition.md)

Returns command definition by its name, except the `js` command.

#### Example

```javascript
const def = Rsvim.cmd.get("write");
Rsvim.cmd.echo(`Command: ${def.name}`);
```

***

### list()

```ts
list(): string[];
```

List all registered ex command names.

:::warning
The builtin `js` command will not be listed here.
:::

#### Returns

`string`[]

Returns all registered ex command names, except the `js` command.

#### Example

```javascript
Rsvim.cmd.list().forEach((name) => {
  Rsvim.cmd.echo(`Command: ${name}`);
});
```

***

### remove()

```ts
remove(name): CommandDefinition;
```

Remove an ex command by name.

:::warning
The builtin command `js` cannot be removed.
:::

#### Parameters

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

#### Returns

[`CommandDefinition`](../namespaces/RsvimCmd/type-aliases/CommandDefinition.md)

Returns the removed [RsvimCmd.CommandDefinition](../namespaces/RsvimCmd/type-aliases/CommandDefinition.md), or `undefined` if no command is been removed.

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if name is not a string.

#### Example

```javascript
Rsvim.cmd.list().forEach((cmd) => {
  // Remove all registered commands.
  Rsvim.cmd.remove(cmd.name);
});
```
