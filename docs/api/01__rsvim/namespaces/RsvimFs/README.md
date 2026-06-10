The `Rsvim.fs` global object for file system and file IO.

## Example

```javascript
// Create a alias to 'Rsvim.fs'.
const fs = Rsvim.fs;
```

## Classes

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[File](classes/File.md)

</td>
<td>

The File object that access to an open file on filesystem.

**See**

[RsvimFs.open](functions/open.md)

</td>
</tr>
</tbody>
</table>

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

[FileInfo](type-aliases/FileInfo.md)

</td>
<td>

File information, it contains 3 groups of properties:
- Common properties that are available for all platforms.
- Windows platforms only properties
- Unix platforms only properties

</td>
</tr>
<tr>
<td>

[OpenOptions](type-aliases/OpenOptions.md)

</td>
<td>

Open options.

:::tip
It is same with [std::fs::OpenOptions](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html) in rust std library.
:::

**See**

[RsvimFs.open](functions/open.md)

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

[lstat](functions/lstat.md)

</td>
<td>

Get the status of a file by path.

:::note
This api doesn't follow symbolic link.
:::

**See**

[RsvimFs.stat](functions/stat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = await Rsvim.fs.lstat("README.md");
```

</td>
</tr>
<tr>
<td>

[lstatSync](functions/lstatSync.md)

</td>
<td>

Sync version of `lstat`.

:::note
This api doesn't follow symbolic link.
:::

**See**

[RsvimFs.lstat](functions/lstat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = Rsvim.fs.lstatSync("README.md");
```

</td>
</tr>
<tr>
<td>

[open](functions/open.md)

</td>
<td>

Open a file and resolve to an instance of [RsvimFs.File](classes/File.md). The file does not need to previously exist if using the `create` or `createNew` open options.
The caller have to close the file to prevent resource leaking, see [RsvimFs.File.close](classes/File.md#close).

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to open/create the file.

**Example**

```javascript
const file = await Rsvim.fs.open("README.md");
```

</td>
</tr>
<tr>
<td>

[openSync](functions/openSync.md)

</td>
<td>

The sync version of [open](functions/open.md).

**Throws**

**Example**

```javascript
const file = Rsvim.fs.openSync("README.md");
```

</td>
</tr>
<tr>
<td>

[readFile](functions/readFile.md)

</td>
<td>

Read a file in binary mode, i.e. into an array of bytes buffer, without open/close a file descriptor/handle.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

**Example**

```javascript
const buffer = await Rsvim.fs.readFile("README.md");
```

</td>
</tr>
<tr>
<td>

[readFileSync](functions/readFileSync.md)

</td>
<td>

The sync version of [readFile](functions/readFile.md).

**Throws**

**Example**

```javascript
const buffer = Rsvim.fs.readFileSync("README.md");
```

</td>
</tr>
<tr>
<td>

[readTextFile](functions/readTextFile.md)

</td>
<td>

Read a file in text mode, i.e. into a string, without open/close a file descriptor/handle.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

**Example**

```javascript
const payload = await Rsvim.fs.readTextFile("README.md");
```

</td>
</tr>
<tr>
<td>

[readTextFileSync](functions/readTextFileSync.md)

</td>
<td>

The sync version of [readTextFile](functions/readTextFile.md).

**Throws**

**Example**

```javascript
const payload = Rsvim.fs.readTextFileSync("README.md");
```

</td>
</tr>
<tr>
<td>

[stat](functions/stat.md)

</td>
<td>

Get the status of a file by path.

:::note
This api follows symbolic link.
:::

**See**

[RsvimFs.lstat](functions/lstat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = await Rsvim.fs.stat("README.md");
```

</td>
</tr>
<tr>
<td>

[statSync](functions/statSync.md)

</td>
<td>

Sync version of `stat`.

:::note
This api follows symbolic link.
:::

**See**

[RsvimFs.stat](functions/stat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = Rsvim.fs.statSync("README.md");
```

</td>
</tr>
</tbody>
</table>
