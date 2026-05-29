```ts
function current(): number;
```

Get current buffer's ID.

The "current" buffer is the buffer that the window where your cursor is
located is binded to.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return `undefined`. Once the editor is initialized, there will always have a
valid buffer binded to the "current" window (where your cursor is). It will return
the valid buffer ID.
:::

## Returns

`number`

It returns a valid buffer ID if the editor is initialized.
Otherwise it returns `undefined` if the editor is not initialized.

## Example

```javascript
const bufId = Rsvim.buf.current();
```
