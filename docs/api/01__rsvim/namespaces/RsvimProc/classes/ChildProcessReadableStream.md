Child process readable stream.

## Methods

### text()

```ts
text(): Promise<string>;
```

Read text from the stream.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

It returns the read text from child process stdio channel.

#### Throws

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read.

#### Example

```javascript
try {
  const cmd = new Rsvim.proc.Command("ls");
  const child = cmd.spawn();
  const output = await child.stdout.text();
  Rsvim.cmd.echo(`"ls" command output:${output}`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to run "ls" command.`);
}
```
