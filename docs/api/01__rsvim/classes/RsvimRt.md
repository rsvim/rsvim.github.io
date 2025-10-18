The `Rsvim.rt` global object for javascript runtime (editor process).

## Example

```javascript
// Create a alias to 'Rsvim.rt'.
const rt = Rsvim.rt;
```

## Methods

### exit()

```ts
exit(exitCode?): void;
```

Exit editor.

:::tip
To ensure file system data safety, editor will wait for all the ongoing file write operations
to complete before actually exiting, however any new write requests will be rejected.
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

`exitCode?`

</td>
<td>

`number`

</td>
<td>

The editor process exit with this exit code. This parameter can be omitted,
by default uses `0` to indicate no error.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `exitCode` is neither an integer nor `undefined`.

#### Example

```javascript
// Exit with default exit code `0`.
Rsvim.rt.exit();

// Exit with error exit code `-1`.
Rsvim.rt.exit(-1);
```
