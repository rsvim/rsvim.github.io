```ts
function loadParserSync(options): string[];
```

Load tree-sitter parsers synchronizely.

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

`options`

</td>
<td>

[`LoadParserOptions`](../type-aliases/LoadParserOptions.md)

</td>
<td>

Load options.

</td>
</tr>
</tbody>
</table>

## Returns

`string`[]

It returns all the loaded parser names.

## See

[loadParser](loadParser.md)

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

## Example

```javascript
// Load `tree-sitter-c` parser synchronizely.
const parserNames = Rsvim.syn.loadParserSync({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```
