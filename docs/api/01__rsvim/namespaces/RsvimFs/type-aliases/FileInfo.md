```ts
type FileInfo = object;
```

File information, it contains 3 groups of properties:
- Common properties that are available for all platforms.
- Windows platforms only properties
- Unix platforms only properties

## Common

### accessed?

```ts
optional accessed?: Date;
```

Last access time of the file.

The value can be `undefined` if failed to get this information.

***

### created?

```ts
optional created?: Date;
```

Creation time of the file.

The value can be `undefined` if failed to get this information.

***

### isDir

```ts
isDir: boolean;
```

Whether the file is a directory. This value is mutually exclusive to `isFile`.

***

### isFile

```ts
isFile: boolean;
```

Whether the file is a regular file. This value is mutually exclusive to `isDir`.

***

### isSymlink

```ts
isSymlink: boolean;
```

Whether the file is a symbolic link.

***

### len

```ts
len: number;
```

The size of the file in bytes.

***

### modified?

```ts
optional modified?: Date;
```

Last modification time of the file.

The value can be `undefined` if failed to get this information.

***

### readOnly

```ts
readOnly: boolean;
```

Whether the file is read-only (unwritable).

## Unix Only

### atime?

```ts
optional atime?: number;
```

Last access time of the file, in seconds since Unix Epoch.

***

### atimeNsec?

```ts
optional atimeNsec?: number;
```

Last access time of the file, in nanoseconds since `atime`.

***

### blksize?

```ts
optional blksize?: number;
```

The block size for filesystem IO.

***

### blocks?

```ts
optional blocks?: number;
```

The number of blocks allocated to the file, in 512-byte units.

Please note that this may be smaller than `st_size / 512` when the file has holes.

***

### ctime?

```ts
optional ctime?: number;
```

Last status change time of the file, in seconds since Unix Epoch.

***

### ctimeNsec?

```ts
optional ctimeNsec?: number;
```

Last status change time of the file, in nanoseconds since `ctime`.

***

### dev?

```ts
optional dev?: number;
```

The ID of the device containing the file.

***

### gid?

```ts
optional gid?: number;
```

The group ID of the owner of the file.

***

### ino?

```ts
optional ino?: number;
```

The inode number.

***

### mode?

```ts
optional mode?: number;
```

The rights applied to the file.

***

### mtime?

```ts
optional mtime?: number;
```

Last modification time of the file, in seconds since Unix Epoch.

***

### mtimeNsec?

```ts
optional mtimeNsec?: number;
```

Last modification time of the file, in nanoseconds since `mtime`.

***

### nlink?

```ts
optional nlink?: number;
```

The number of hard links pointing to the file.

***

### rdev?

```ts
optional rdev?: number;
```

The device ID of the file (if it is a special one).

***

### size?

```ts
optional size?: number;
```

The total size of the file in bytes.

***

### uid?

```ts
optional uid?: number;
```

The user ID of the owner of the file.

## Windows Only

### creationTime?

```ts
optional creationTime?: number;
```

The `ftCreationTime` value of the file.

The value is equivalent to a [FILETIME](https://learn.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime) struct, which represents the number of 100-nanosecond intervals since January 1, 1601 (UTC).

***

### fileAttributes?

```ts
optional fileAttributes?: number;
```

The `dwFileAttributes` value of the file.

For possible values and their descriptions, see [File Attribute Constants](https://learn.microsoft.com/en-us/windows/win32/fileio/file-attribute-constants) in the Windows Dev Center.

***

### fileSize?

```ts
optional fileSize?: number;
```

The `nFileSize` value of the file.

The value doesn't have meaning for directories.

***

### lastAccessTime?

```ts
optional lastAccessTime?: number;
```

The `ftLastAccessTime` value of the file.

The value is equivalent to a [FILETIME](https://learn.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime) struct, which represents the number of 100-nanosecond intervals since January 1, 1601 (UTC).

***

### lastWriteTime?

```ts
optional lastWriteTime?: number;
```

The `ftLastWriteTime` value of the file.

The value is equivalent to a [FILETIME](https://learn.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime) struct, which represents the number of 100-nanosecond intervals since January 1, 1601 (UTC).
