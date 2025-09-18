# ImportMeta

Rsvim provides meta properties on `import.meta`, same with [node](https://nodejs.org/api/esm.html#importmeta) and [deno](https://docs.deno.com/api/web/~/ImportMeta). See [MDN `import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta).

## Accessors

### url

#### Get Signature

```ts
get url(): string;
```

A string representation of fully qualified module URL. When the module is loaded locally, the value will be a file URL, e.g. `file:///path/module.js`.

:::tip
Rsvim doesn't support remote modules (at least for now), thus all modules are locally loaded from file system.
:::

##### Example

```javascript
// Get the url of current script file.
const value = import.meta.url;
const url = new URL(import.meta.url);
if (url.protocol === "file:") {
  Rsvim.cmd.echo("this module was loaded locally");
}
```

##### Returns

`string`

### filename

#### Get Signature

```ts
get filename(): string;
```

The absolute file path of current module. This property is only provided for local loaded modules, i.e. using `file://` URLs.

##### Example

```javascript
// Unix
Rsvim.cmd.echo(import.meta.filename); //    /home/alice/.rsvim.js
// Windows
Rsvim.cmd.echo(import.meta.filename); //    C:\Users\alice\.rsvim.js
```

##### Returns

`string | undefined`

### dirname

#### Get Signature

```ts
get dirname(): string;
```

The absolute file path of the directory that containing current module. This property is only provided for local loaded modules, i.e. using `file://` URLs.

##### Example

```javascript
// Unix
Rsvim.cmd.echo(import.meta.dirname); //    /home/alice
// Windows
Rsvim.cmd.echo(import.meta.dirname); //    C:\Users\alice
```

##### Returns

`string | undefined`

### main

#### Get Signature

```ts
get main(): boolean;
```

Whether current module is the main module that was called when starting Rsvim, i.e. the config entry point of Rsvim. See [Configuration](/docs/manual/configuration).

##### Example

```javascript
const isMain = import.meta.main;
```

##### Returns

`boolean`

## Methods

### resolve()

```ts
resolve(specifier): string;
```

Resolves the URL for a specifier as if it would be imported using `import(specifier)`.

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

`specifier`

</td>
<td>

`string`

</td>
<td>

The specifier to be resolved.

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

It returns a resolved URL.

#### Example

```javascript
const bufId = Rsvim.buf.current();
```
