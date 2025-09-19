The `Rsvim.cmd` global object for Ex commands.

:::tip
The "ex command" mostly describes the product function, i.e. when user types ":" in normal mode,
user can move cursor to command-line and input commands. Rather than referring to the
["ex commands"](https://vimhelp.org/intro.txt.html#Ex-mode) in Vim editor.
:::

## Example

```javascript
// Create a alias to 'Rsvim.cmd'.
const cmd = Rsvim.cmd;
```

## Implements

- [`RsvimCmd`](../interfaces/RsvimCmd.md)

## Constructors

### Constructor

```ts
new RsvimCmdImpl(): RsvimCmdImpl;
```

#### Returns

`RsvimCmdImpl`

## Methods

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

`string`

</td>
<td>

It accepts string and other primitive types, except `null`
and `undefined`.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if no parameter provided, or the parameter is `null` or `undefined`.

#### Example

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
```

#### Implementation of

[`RsvimCmd`](../interfaces/RsvimCmd.md).[`echo`](../interfaces/RsvimCmd.md#echo)
