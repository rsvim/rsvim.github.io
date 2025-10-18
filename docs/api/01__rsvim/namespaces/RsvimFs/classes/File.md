The File object that access to an open file on filesystem.

## See

[RsvimFs.open](../../../classes/RsvimFs.md#open)

## Methods

### close()

```ts
close(): void;
```

Close the file.

#### Returns

`void`

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if the file is already been closed.

#### Example

```javascript
const file = await Rsvim.fs.open("README.md");
if (!file.isClosed()) {
  file.close();
}
```

***

### isClosed()

```ts
isClosed(): boolean;
```

Whether the file is already been closed.

#### Returns

`boolean`

#### Example

```javascript
const file = await Rsvim.fs.open("README.md");
if (!file.isClosed()) {
  file.close();
}
```
