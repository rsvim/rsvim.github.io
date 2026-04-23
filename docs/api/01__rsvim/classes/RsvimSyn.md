The `Rsvim.syn` global object for javascript runtime (editor process).

## Example

```javascript
// Create a alias to 'Rsvim.syn'.
const syn = Rsvim.syn;
```

## Methods

### getParserMetadata()

```ts
getParserMetadata(name): ParserMetadata;
```

Get tree-sitter parser metadata by parser name.

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

The parser's name.

</td>
</tr>
</tbody>
</table>

#### Returns

[`ParserMetadata`](../namespaces/RsvimSyn/type-aliases/ParserMetadata.md)

It returns all the loaded parser names.

#### Example

```javascript
// Get parser metadata by name.
const parserMetadata = Rsvim.syn.getParserMetadata("rust");
Rsvim.cmd.echo(`Rust parser metadata: ${parserMetadata}`);
```

***

### listParsers()

```ts
listParsers(): string[];
```

List all loaded tree-sitter parsers.

#### Returns

`string`[]

It returns all the loaded parser names.

#### Example

```javascript
// Print all loaded parser names.
const allParserNames = Rsvim.syn.listParsers();
Rsvim.cmd.echo(`All loaded parsers: ${allParserNames}`);
```

***

### loadParser()

```ts
loadParser(options): Promise<string[]>;
```

Load tree-sitter parsers.

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

`options`

</td>
<td>

[`LoadParserOptions`](../namespaces/RsvimSyn/type-aliases/LoadParserOptions.md)

</td>
<td>

Load options.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

It returns all the loaded parser names.

#### See

[tree-sitter - List of parsers](https://github.com/tree-sitter/tree-sitter/wiki/List-of-parsers)

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

#### Example

```javascript
// Load `tree-sitter-c` parser.
const parserNames = await Rsvim.syn.loadParser({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```

***

### loadParserSync()

```ts
loadParserSync(options): string[];
```

Load tree-sitter parsers synchronizely.

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

`options`

</td>
<td>

[`LoadParserOptions`](../namespaces/RsvimSyn/type-aliases/LoadParserOptions.md)

</td>
<td>

Load options.

</td>
</tr>
</tbody>
</table>

#### Returns

`string`[]

It returns all the loaded parser names.

#### See

[loadParser](#loadparser)

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if `options` is an invalid option, throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to load.

#### Example

```javascript
// Load `tree-sitter-c` parser synchronizely.
const parserNames = Rsvim.syn.loadParserSync({grammarPath: "./tree-sitter-c"});
Rsvim.cmd.echo(`Loaded parsers: ${parserNames}`);
```
