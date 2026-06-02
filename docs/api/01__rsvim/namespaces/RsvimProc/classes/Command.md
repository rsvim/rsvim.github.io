The command that create a child process.

## Constructors

### Constructor

```ts
new Command(execPath, options?): Command;
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`execPath`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`CommandOptions`](../type-aliases/CommandOptions.md)

</td>
</tr>
</tbody>
</table>

#### Returns

`Command`

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

## Methods

### spawn()

```ts
spawn(): Promise<ChildProcess>;
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ChildProcess`](ChildProcess.md)\>
