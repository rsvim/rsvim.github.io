```ts
type CommandAttributes = object;
```

Command attributes.

## See

[RsvimCmd.create](../../../interfaces/RsvimCmd.md#create)

## Properties

### bang?

```ts
optional bang: boolean;
```

Whether the command can take a `!` modifier, for example: `:w!`, `:qall!`.

By default is `false`
,

***

### nargs?

```ts
optional nargs: "0" | "1" | "*" | "+" | "?";
```

Whether The command can take any arguments, and how many it can take:

- `0`: No arguments are allowed.
- `1`: Exactly 1 argument is required.
- `*`: Any number of arguments are allowed, i.e. 0, 1 or more.
- `?`: 0 or 1 arguments are allowed.
- `+`: At least 1 arguments are required.

By default is `"0"`
,
