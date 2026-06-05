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

### exitStatus

#### Get Signature

```ts
get exitStatus(): ChildProcessExitStatus;
```

Get child process exit status.

##### Example

```javascript
const child = new Rsvim.proc.Command("ls").spawn();
await child.wait();
const exitStatus = child.exitStatus;
```

##### Returns

[`ChildProcessExitStatus`](../type-aliases/ChildProcessExitStatus.md)

It returns exit status if the child process is already finished, otherwise it returns `null`.

***

### isDisposed

#### Get Signature

```ts
get isDisposed(): boolean;
```

Child process is already completed.

##### Example

```javascript
const child = new Rsvim.proc.Command("ls").spawn();
{
  await using usedChild = child;
  Rsvim.cmd.echo(usedChild.isDisposed); // false
}
Rsvim.cmd.echo(usedChild.isDisposed); // true
```

##### Returns

`boolean`

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

### \[asyncDispose\]()

```ts
asyncDispose: Promise<void>;
```

Same with `wait`, except it doesn't return exit status.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

It returns nothing.

***

### wait()

```ts
wait(): Promise<ChildProcessExitStatus>;
```

Wait for child process complete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ChildProcessExitStatus`](../type-aliases/ChildProcessExitStatus.md)\>

It returns a child process exit status.

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if the child process is already finished, or failed to wait.

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
