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

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`callback`

</td>
<td>

(...`args`) => `void`

</td>
<td>

A function to be executed after the timer expires.

</td>
</tr>
<tr>
<td>

`delay`

</td>
<td>

`number`

</td>
<td>

The milliseconds that the timer should wait before the function is executed.

</td>
</tr>
<tr>
<td>

...`args`?

</td>
<td>

`any`[]

</td>
<td>

Additional arguments which are passed through to the function.

</td>
</tr>
</tbody>
</table>

#### Returns

`number`

The ID (integer) which identifies the timer created.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if callback is not a function value.

#### Defined in

[10\_\_global.ts:27](https://github.com/rsvim/rsvim/blob/1b4b924908b10e9a5e111937c5a50495e6ba0fd5/src/js/runtime/10__global.ts#L27)

***

### clearTimeout()

```ts
clearTimeout(id): void
```

Cancels a timeout previously established by calling [setTimeout](GlobalThis.md#settimeout).

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`id`

</td>
<td>

`number`

</td>
<td>

The ID (integer) which identifies the timer.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

Nothing.

#### Throws

[Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if ID is not an integer value.

#### Defined in

[10\_\_global.ts:40](https://github.com/rsvim/rsvim/blob/1b4b924908b10e9a5e111937c5a50495e6ba0fd5/src/js/runtime/10__global.ts#L40)
