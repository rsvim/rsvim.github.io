# ImportMeta

Rsvim provides meta properties on `import.meta`, same with [node](https://nodejs.org/api/esm.html#importmeta) and [deno](https://docs.deno.com/api/web/~/ImportMeta). See [MDN `import.meta`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta).

## Accessors

### url

#### Get Signature

```ts
get url(): string;
```

Get the url of current script file. See []

See [shiftWidth](#shiftwidth) to get the number of spaces when inserting.

##### Default Value

`false`

##### Example

```javascript
// Get the url of current script file.
const url = import.meta.url;
```

##### Returns

`string`
