```ts
type CommandOptions = object;
```

Command options when creating a command.

## See

[RsvimCmd.create](../../../classes/RsvimCmd.md#create)

## Properties

### alias?

```ts
optional alias: string;
```

Command alias, i.e. short name.

For example, the `w` is alias for `write`.

#### Default Value

`undefined`

***

### force?

```ts
optional force: boolean;
```

Whether force override the command if there's already an existing one.

#### Default Value

`true`
