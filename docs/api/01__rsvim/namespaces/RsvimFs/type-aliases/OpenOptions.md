```ts
type OpenOptions = object;
```

Open options.

Note: It is the same with [std::fs::OpenOptions](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html) in rust std library.

## See

[RsvimFs.open](../../../classes/RsvimFs.md#open)

## Properties

### append?

```ts
optional append: boolean;
```

Set the file for append mode.

#### Default Value

`false`
,

***

### create?

```ts
optional create: boolean;
```

Create a new file or open it if it already exists.

In order for the file to be created, `write` or `append` access must be used.

#### Default Value

`false`
,

***

### createNew?

```ts
optional createNew: boolean;
```

Create a new file, failing if it already exists.

If this option is set, `create` and `truncate` options are ignored.

#### Default Value

`false`
,

***

### read?

```ts
optional read: boolean;
```

Set the file for read access.

#### Default Value

`false`
,

***

### truncate?

```ts
optional truncate: boolean;
```

Open the file and truncate the file to `0` length if it already exists.

#### Default Value

`false`
,

***

### write?

```ts
optional write: boolean;
```

Set the file for write access. If the file already exists, any "write" calls on it will 
overwrite the contents, without truncating it.

#### Default Value

`false`
,
