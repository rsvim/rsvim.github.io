The [globalThis](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global object.

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

### setInterval()

```ts
setInterval(
   callback, 
   delay?, ...
   args?): number;
```

Set a repeated timer that calls a function, with a fixed time delay between each call. Also see [setInterval](https://developer.mozilla.org/docs/Web/API/Window/setInterval).

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

The milliseconds that the timer should delay in between execution of the function. By default 1.

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

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is not a number.

***

### setTimeout()

```ts
setTimeout(
   callback, 
   delay?, ...
   args?): number;
```

Set a timer which executes a function or specified piece of code once the timer expires. Also see [setTimeout](https://developer.mozilla.org/docs/Web/API/Window/setTimeout).

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

The milliseconds that the timer should wait before the function is executed. By default 1.

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

Throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if callback is not a function value.
