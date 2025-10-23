The [globalThis](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global object.

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="textencoder"></a> `TextEncoder`

</td>
<td>

[`TextEncoder`](../classes/TextEncoder.md)

</td>
<td>

Encode string text into bytes array, it only supports "utf-8" encoding.

</td>
</tr>
<tr>
<td>

<a id="textdecoder"></a> `TextDecoder`

</td>
<td>

[`TextDecoder`](../classes/TextDecoder.md)

</td>
<td>

Decode bytes array into string text, with specified encoding.

</td>
</tr>
</tbody>
</table>

## Methods

### clearInterval()

```ts
clearInterval(id): void;
```

Cancel a repeated timer previously established by calling [setInterval](https://developer.mozilla.org/docs/Web/API/Window/setInterval).

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

The ID (integer) which identifies the schedule.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if ID is not an integer.

***

### clearTimeout()

```ts
clearTimeout(id): void;
```

Cancel a timeout previously established by calling [setTimeout](https://developer.mozilla.org/docs/Web/API/Window/setTimeout).

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

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if ID is not an integer.

***

### queueMicrotask()

```ts
queueMicrotask(callback): void;
```

A microtask is a short function which is executed after the function or module which created it exits and
only if the JavaScript execution stack is empty, but before returning control to the event loop being used
to drive the script's execution environment.

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

() => `void`

</td>
<td>

A function to be executed.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function.

***

### reportError()

```ts
reportError(error): void;
```

Dispatch an uncaught exception. Similar to synchronous version of `setTimeout(() => {throw error;}, 0);`.

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

`error`

</td>
<td>

`any`

</td>
<td>

Anything to be thrown.

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### setInterval()

```ts
setInterval(
   callback, 
   delay?, ...
   args?): number;
```

Set a repeated timer that calls a function, with a fixed time delay between each call.

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

A function to be executed every `delay` milliseconds.

</td>
</tr>
<tr>
<td>

`delay?`

</td>
<td>

`number`

</td>
<td>

The milliseconds that the timer should delay in between execution of the function. This parameter can be omitted, by default is 1.

</td>
</tr>
<tr>
<td>

...`args?`

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

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is neither a number or undefined.

***

### setTimeout()

```ts
setTimeout(
   callback, 
   delay?, ...
   args?): number;
```

Set a timer which executes a function or specified piece of code once the timer expires.

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

`delay?`

</td>
<td>

`number`

</td>
<td>

The milliseconds that the timer should wait before the function is executed. This parameter can be omitted, by default is 1.

</td>
</tr>
<tr>
<td>

...`args?`

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

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is neither a number or undefined.
