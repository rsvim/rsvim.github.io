```ts
function loadParser(options): Promise<string[]>;
```

Load tree-sitter parsers.

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

It returns all the loaded parser names.

## See

[tree-sitter - List of parsers](https://github.com/tree-sitter/tree-sitter/wiki/List-of-parsers)

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

## Example

```javascript
// Load `tree-sitter-c` parser.
const parserNames = await Rsvim.syn.loadParser({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```
