```ts
function list(): number[];
```

List all buffers' IDs.

:::warning
When the editor is not initialized, i.e. there's no buffer/window created. It
will return an empty array. Once the editor is initialized, there will have at least 1
buffer binded to the "current" window (where your cursor is). It will return all the
buffer IDs as an array.
:::

## Returns

`number`[]

All the buffers' IDs as an array. If there's no
buffer (i.e. the editor is not initialized), it returns an empty array.

## Example

```javascript
const bufIds = Rsvim.buf.list();
```
