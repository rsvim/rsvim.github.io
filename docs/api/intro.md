---
sidebar_position: 1
---

# Introduction

:::tip
If you need the Rsvim manuals/usage you can find them in [User Manual](/docs/user_manual/get_started).
:::

This chapter references all the APIs provided by the Rsvim editor.

## 1. ECMAScript Standard Built-in APIs

ECMAScript's standard built-in APIs are defined by the [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/), natively implemented by the V8 engine embedded in Rsvim, i.e. these APIs are "global objects" that are available without `import`/`require` any additional/external modules. For example [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)/[`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), etc.

Please reach out to [MDN | Standard built-in objects - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) for detailed built-in API references.

## 2. Standardized Web Platform APIs

Besides the ECMAScript standard, a large number of web APIs are also been widely used and implemented by most javascript-based runtimes: chrome/firefox browsers, node/deno runtimes, etc. The full list of all web APIs and interfaces can be found in [MDN | Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), and the [WinterTC](https://wintertc.org/) community group come up with the [Minimum Common Web Platform API](https://min-common-api.proposal.wintertc.org/) specification, which defines a minimum set of standard web platform APIs to both browser and non-browser javascript-based runtimes. Rsvim also follows the WinterTC standards, but (maybe) only provide a subset of these APIs due to the development effort.

The web APIs are "global objects", and can be accessed without `import`/`require` any additional/external modules, just like javascript/ecmascript standard built-in APIs.

## 3. Rsvim Specialized APIs

Similar to node/deno, Rsvim also provide a set of non-standard APIs to help users manipulating both the editor and the operating system. The APIs can be divided into several groups: editor related, general purposed.

### 2.1. Editor APIs

Editor APIs are for the text editor itself, including windows, buffers, cursors, commands, etc. They can be accessed via the global object [`Rsvim`](rsvim/classes/Rsvim), similar to the [`vim`](https://neovim.io/doc/user/lua.html#Lua) global namespace in Neovim's lua.

### 2.2. General Purposed APIs

General purposed APIs are similar to the concept of the standard library in many programming languages. (From this perspective, there is no functional difference between Rsvim editor and general javascript runtimes such as [Node.js](https://nodejs.org/) and [Deno](https://deno.com/), ) But Rsvim focus on text editing and processing, the existence of all APIs only serves this purpose, they provide functions mainly related to operating system such as file system, network/http, date and time, IPC/RPC and process management, etc. For web and browser related APIs, they will not be provided.

These APIs also share the same global object [`Rsvim`](rsvim/classes/Rsvim), the implementations follow [Deno APIs](https://docs.deno.com/api/deno/).

:::warning
Rsvim editor exposes the rust implemented APIs to the JavaScript world by binding them to the `__InternalRsvimGlobalObject` global object, which should never be directly used. The `Rsvim` is a thin wrapper on it.
:::
