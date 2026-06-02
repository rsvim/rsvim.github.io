```ts
type CommandOptions = object;
```

Command options when creating a child-process command.

## See

[RsvimProc.Command](../classes/Command.md)

## Properties

### args?

```ts
optional args?: string[];
```

Command arguments.

#### Default Value

`[]`

***

### clearEnv?

```ts
optional clearEnv?: boolean;
```

Whether to clear environment variables when the command creating a child-process.

#### Default Value

`false`

***

### cwd?

```ts
optional cwd?: string;
```

Current working directory.

#### Default Value

`undefined`

***

### detached?

```ts
optional detached?: boolean;
```

Whether to detach spawned child process from current process (editor process).
This allows the spawned child process to continue running after current process exits.

#### Default Value

`false`

***

### env?

```ts
optional env?: Record<string, string | undefined | null>;
```

Environment variables to pass to the child-process.

#### Default Value

`{}`

***

### stderr?

```ts
optional stderr?: "piped" | "inherit" | "null";
```

How `stderr` of spawned child process should be handled.

#### Default Value

`piped`

***

### stdin?

```ts
optional stdin?: "piped" | "inherit" | "null";
```

How `stdin` of spawned child process should be handled.

#### Default Value

`null`

***

### stdout?

```ts
optional stdout?: "piped" | "inherit" | "null";
```

How `stdout` of spawned child process should be handled.

#### Default Value

`piped`
