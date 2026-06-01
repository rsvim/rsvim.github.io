```ts
function list(): string[];
```

List all registered ex command names.

:::warning
The builtin `js` command will not be listed here.
:::

## Returns

`string`[]

Returns all registered ex command names, except the `js` command.

## Example

```javascript
Rsvim.cmd.list().forEach((name) => {
  Rsvim.cmd.echo(`Command: ${name}`);
});
```
