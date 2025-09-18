# ImportMeta

Rsvim provides meta properties on `import.meta`, same with [node](https://nodejs.org/api/esm.html#importmeta) and [deno](https://docs.deno.com/api/web/~/ImportMeta). See [MDN `import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta).

## Accessors

### url

#### Get Signature

```ts
get url(): string;
```

A string representation of fully qualified module URL. When the module is loaded locally, the value will be a file URL, e.g. `file:///path/module.js`.

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
