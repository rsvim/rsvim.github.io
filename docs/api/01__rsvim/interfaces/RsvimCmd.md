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

## Methods

### create()

```ts
create(
   name, 
   callback, 
   attr?, 
   opts?): CommandCallback;
```

Create a user ex command with a callback function.

:::warning
The only builtin command from Rsvim is the `js` command, which cannot be override.
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

The command name that is going to create. Only letters (both lowercase `a-z` and uppercase `A-Z`), digits (`0-9`) and underscore (`_`) are allowed to be used as a command name. And a command name must begin with either a letter or underscore, digit is not allowed.

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

The backend function that implements the command logic. It accepts an `ctx` parameter that contains all the information when user is running the command, such as `bang`, arguments, buffer ID, etc.

</td>
</tr>
<tr>
<td>

`attr?`

</td>
<td>

[`CommandAttributes`](../namespaces/RsvimCmd/type-aliases/CommandAttributes.md)

</td>
<td>

The command attributes, it controls the command related behavior, such as `bang`, `nargs`, `bufId`, etc.

</td>
</tr>
<tr>
<td>

`opts?`

</td>
<td>

[`CreateCommandOptions`](../namespaces/RsvimCmd/type-aliases/CreateCommandOptions.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Returns

[`CommandCallback`](../namespaces/RsvimCmd/type-aliases/CommandCallback.md)

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if name is not a `null` or `undefined` or no parameter provided.

#### Example

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
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

It accepts string and other primitive types, except `null`
and `undefined`.

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
