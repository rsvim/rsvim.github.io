The `Rsvim.syn` global object for javascript runtime (editor process).

## Example

```javascript
// Create a alias to 'Rsvim.syn'.
const syn = Rsvim.syn;
```

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[LoadParserOptions](type-aliases/LoadParserOptions.md)

</td>
<td>

Options to load a tree-sitter parser.

**See**

[RsvimSyn.loadParser](functions/loadParser.md)

</td>
</tr>
<tr>
<td>

[ParserMetadata](type-aliases/ParserMetadata.md)

</td>
<td>

Tree-sitter parser metadata.

**See**

[RsvimSyn.getParserMetadata](functions/getParserMetadata.md)

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[getParserMetadata](functions/getParserMetadata.md)

</td>
<td>

Get tree-sitter parser metadata by parser name.

**Example**

```javascript
// Get parser metadata by name.
const parserMetadata = Rsvim.syn.getParserMetadata("rust");
Rsvim.cmd.echo(`Rust parser metadata: ${parserMetadata}`);
```

</td>
</tr>
<tr>
<td>

[listParsers](functions/listParsers.md)

</td>
<td>

List all loaded tree-sitter parsers.

**Example**

```javascript
// Print all loaded parser names.
const allParserNames = Rsvim.syn.listParsers();
Rsvim.cmd.echo(`All loaded parsers: ${allParserNames}`);
```

</td>
</tr>
<tr>
<td>

[loadParser](functions/loadParser.md)

</td>
<td>

Load tree-sitter parsers.

**See**

[tree-sitter - List of parsers](https://github.com/tree-sitter/tree-sitter/wiki/List-of-parsers)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

**Example**

```javascript
// Load `tree-sitter-c` parser.
const parserNames = await Rsvim.syn.loadParser({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```

</td>
</tr>
<tr>
<td>

[loadParserSync](functions/loadParserSync.md)

</td>
<td>

Load tree-sitter parsers synchronizely.

**See**

[loadParser](functions/loadParser.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

**Example**

```javascript
// Load `tree-sitter-c` parser synchronizely.
const parserNames = Rsvim.syn.loadParserSync({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```

</td>
</tr>
</tbody>
</table>
