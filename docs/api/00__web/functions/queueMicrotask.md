```ts
function queueMicrotask(callback): void;
```

A microtask is a short function which is executed after the function or module which created it exits and
only if the JavaScript execution stack is empty, but before returning control to the event loop being used
to drive the script's execution environment.

## Parameters

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

## Returns

`void`

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function.
