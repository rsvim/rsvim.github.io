The [globalThis](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global namespace.

## Methods

### setTimeout()

```ts
setTimeout(
   callback, 
   delay, ...
   args?): number
```

Sets a timer which executes a function or specified piece of code once the timer expires. Also see [setTimeout](https://developer.mozilla.org/docs/Web/API/setTimeout).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`) => `void` | A function to be executed after the timer expires. |
| `delay` | `number` | The milliseconds that the timer should wait before the function is executed. |
| ...`args`? | `any`[] | Additional arguments which are passed through to the function. |

#### Returns

`number`

The ID (integer) which identifies the timer created.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if callback is not a function value.

#### Defined in

[10\_\_global.ts:23](https://github.com/rsvim/rsvim/blob/913b4f141a869533f584487316d2598495e6f9bc/src/js/runtime/10__global.ts#L23)

***

### clearTimeout()

```ts
clearTimeout(id): void
```

Cancels a timeout previously established by calling [setTimeout](GlobalThis.md#settimeout).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | The ID (integer) which identifies the timer. |

#### Returns

`void`

Nothing.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if ID is not an integer value.

#### Defined in

[10\_\_global.ts:36](https://github.com/rsvim/rsvim/blob/913b4f141a869533f584487316d2598495e6f9bc/src/js/runtime/10__global.ts#L36)
