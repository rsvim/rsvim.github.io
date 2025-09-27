```ts
type CommandOptions = object;
```

Command options when creating a command.

## See

[RsvimCmd.create](../../../interfaces/RsvimCmd.md#create)

## Properties

### force?

```ts
optional force: boolean;
```

Whether force override the command if there's already an existing one.

By default is `true`

***

### alias?

```ts
optional alias: string;
```

Command alias, i.e. short name.

For example, the `w` is alias for `write`.
