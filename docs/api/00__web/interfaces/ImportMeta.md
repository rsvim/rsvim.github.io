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
// Get the url of current script file.
const value = import.meta.url;
const url = new URL(import.meta.url);
if (url.protocol === "file:") {
  Rsvim.cmd.echo("this module was loaded locally");
}
```

##### Returns

`string`
