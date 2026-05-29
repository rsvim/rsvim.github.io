```ts
function listParsers(): string[];
```

List all loaded tree-sitter parsers.

## Returns

`string`[]

It returns all the loaded parser names.

## Example

```javascript
// Print all loaded parser names.
const allParserNames = Rsvim.syn.listParsers();
Rsvim.cmd.echo(`All loaded parsers: ${allParserNames}`);
```
