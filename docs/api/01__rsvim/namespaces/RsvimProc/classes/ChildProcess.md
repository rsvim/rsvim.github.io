Child process spawned from command.

## Accessors

### execPath

#### Get Signature

```ts
get execPath(): string;
```

##### Returns

`string`

***

### options

#### Get Signature

```ts
get options(): CommandOptions;
```

##### Returns

[`CommandOptions`](../type-aliases/CommandOptions.md)

***

### stderr

#### Get Signature

```ts
get stderr(): ChildProcessReadableStream;
```

##### Returns

[`ChildProcessReadableStream`](ChildProcessReadableStream.md)

***

### stdout

#### Get Signature

```ts
get stdout(): ChildProcessReadableStream;
```

##### Returns

[`ChildProcessReadableStream`](ChildProcessReadableStream.md)

## Methods

### wait()

```ts
wait(): Promise<ChildProcessExitStatus>;
```

Wait for child process complete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ChildProcessExitStatus`](../type-aliases/ChildProcessExitStatus.md)\>

It returns a child process exit status.

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to wait for child process.

#### Example

```javascript
try {
  const cmd = new Rsvim.proc.Command("ls");
  const child = cmd.spawn();
  const output = await child.stdout.text();
  const exitStatus = await child.wait();
  Rsvim.cmd.echo(`"ls" command is completed successfully: ${exitStatus.success}.`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to run "ls" command.`);
}
```
