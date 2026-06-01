```ts
function getParserMetadata(name): ParserMetadata;
```

Get tree-sitter parser metadata by parser name.

## Parameters

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

The parser's name.

</td>
</tr>
</tbody>
</table>

## Returns

[`ParserMetadata`](../type-aliases/ParserMetadata.md)

It returns all the loaded parser names.

## Example

```javascript
// Get parser metadata by name.
const parserMetadata = Rsvim.syn.getParserMetadata("rust");
Rsvim.cmd.echo(`Rust parser metadata: ${parserMetadata}`);
```
