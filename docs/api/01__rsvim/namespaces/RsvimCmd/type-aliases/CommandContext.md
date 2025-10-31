```ts
type CommandContext = object;
```

Command runtime context.

When a command is been execute, runtime information will be passed to the command callback function.

## Properties

### bang

```ts
bang: boolean;
```

Whether the command is executed with a bang "!".

***

### args

```ts
args: string[];
```

Arguments that are passed to the command when executed.

***

### currentBufferId

```ts
currentBufferId: number;
```

Current buffer ID when the command is executed.

***

### currentWindowId

```ts
currentWindowId: number;
```

Current window ID when the command is executed.
