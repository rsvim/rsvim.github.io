---
title: Web API
sidebar_position: 3
---

The [globalThis](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/globalThis) global object, compatible with [WinterTC](https://min-common-api.proposal.wintertc.org/) web platform APIs.

## See

[MDN - Web APIs](https://developer.mozilla.org/docs/Web/API).

## Namespaces

<table>
<thead>
<tr>
<th>Namespace</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[TextEncoder](namespaces/TextEncoder/README.md)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

[TextDecoder](namespaces/TextDecoder/README.md)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

## Classes

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[TextEncoder](classes/TextEncoder.md)

</td>
<td>

Encode string text into bytes, it only supports "utf-8" encoding.

**See**

[TextEncoder](https://developer.mozilla.org/docs/Web/API/TextEncoder)

</td>
</tr>
<tr>
<td>

[TextDecoder](classes/TextDecoder.md)

</td>
<td>

Decode bytes array into string text.

**See**

[TextDecoder](https://developer.mozilla.org/docs/Web/API/TextDecoder)

</td>
</tr>
</tbody>
</table>

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[TypedArray](type-aliases/TypedArray.md)

</td>
<td>

[TypedArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[clearInterval](functions/clearInterval.md)

</td>
<td>

Cancel a repeated timer previously established by calling [setInterval](functions/setInterval.md).

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if ID is not an integer.

</td>
</tr>
<tr>
<td>

[setInterval](functions/setInterval.md)

</td>
<td>

Set a repeated timer that calls a function, with a fixed time delay between each call.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is neither a number or undefined.

</td>
</tr>
<tr>
<td>

[clearTimeout](functions/clearTimeout.md)

</td>
<td>

Cancel a timeout previously established by calling [setTimeout](functions/setTimeout.md).

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if ID is not an integer.

</td>
</tr>
<tr>
<td>

[setTimeout](functions/setTimeout.md)

</td>
<td>

Set a timer which executes a function or specified piece of code once the timer expires.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is neither a number or undefined.

</td>
</tr>
<tr>
<td>

[queueMicrotask](functions/queueMicrotask.md)

</td>
<td>

A microtask is a short function which is executed after the function or module which created it exits and
only if the JavaScript execution stack is empty, but before returning control to the event loop being used
to drive the script's execution environment.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function.

</td>
</tr>
<tr>
<td>

[reportError](functions/reportError.md)

</td>
<td>

Dispatch an uncaught exception. Similar to synchronous version of `setTimeout(() => {throw error;}, 0);`.

</td>
</tr>
</tbody>
</table>
