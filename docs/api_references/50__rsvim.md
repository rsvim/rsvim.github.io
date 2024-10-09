# 50\_\_rsvim

## Interfaces

### Rsvim

The type definition for global object `Rsvim`.

It contains multiple sub fields:

- `Rsvim.opt`: Global editor options, see [RsvimOpt](50__rsvim.md#rsvimopt).

#### Properties

##### opt

> **opt**: [`RsvimOpt`](50__rsvim.md#rsvimopt)

###### Defined in

[50\_\_rsvim.ts:14](https://github.com/rsvim/rsvim/blob/34d52a8ac112d0eb16aef04556925ab751702af7/src/js/runtime/50__rsvim.ts#L14)

***

### RsvimOpt

The type definition for global object `Rsvim.opt`.

See [Rsvim](50__rsvim.md#rsvim).

#### Methods

##### lineWrap()

> **lineWrap**(): `boolean`

Get editor line-wrap option.

###### Returns

`boolean`

The line-wrap option value.

###### Default Value

`false`.

###### Defined in

[50\_\_rsvim.ts:30](https://github.com/rsvim/rsvim/blob/34d52a8ac112d0eb16aef04556925ab751702af7/src/js/runtime/50__rsvim.ts#L30)

##### setLineWrap()

> **setLineWrap**(`value`): `void`

Set editor line-wrap option.

###### Parameters

• **value**: `boolean`

line-wrap value.

###### Returns

`void`

###### Throws

Error if value is not boolean.

###### Defined in

[50\_\_rsvim.ts:39](https://github.com/rsvim/rsvim/blob/34d52a8ac112d0eb16aef04556925ab751702af7/src/js/runtime/50__rsvim.ts#L39)
