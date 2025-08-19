The `Rsvim.cmd` global object for ex commands.

:::tip
The "ex command" mostly describes the product function, i.e. when user types ":" in normal mode,
user can move cursor to command-line and input commands. Rather than referring to the
["ex commands"](https://vimhelp.org/intro.txt.html#Ex-mode) in Vim editor.
:::

## Example

```javascript
const cmd = Rsvim.cmd;
```

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
</tr>
</tbody>
</table>

#### Returns

`void`

#### Example

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
```
