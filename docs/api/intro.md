---
sidebar_position: 1
---

# Introduction

:::tip
If you need the Rsvim manuals/usage you can find them in [User Manual](/docs/user_manual/get_started), you can also contribute to this document on [GitHub](https://github.com/rsvim/rsvim.github.io).
:::

With the concept of thinking of Rsvim editor as a specialized javascript-based runtime, calling APIs provided by Rsvim is literally the only way to interact with Rsvim when writing js scripts. For other things such as Vim commands and key mappings, they are only user interfaces implemented by js functions.

This chapter introduces the JavaScript APIs provided by the Rsvim editor. When configuring options or developing plugins, you can think of it as a specialized js runtime implementation similar to [Node.js](https://nodejs.org/en)/[Deno](https://deno.com/), by taking over the control of `stdio`.

Rsvim provides the following APIs:

:::warning
Rsvim editor exposes the rust implemented APIs to the JavaScript world by binding them to the `__InternalRsvimGlobalObject` global object, which should never be directly used.
:::

## 1. JavaScript/ECMAScript Standard Built-in Global Objects/APIs

JavaScript/ECMAScript's standard built-in global objects/APIs are defined by the [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/), natively implemented by the V8 engine embedded in Rsvim, i.e. these APIs are available without `import`/`require` any additional/external modules. For example `globalThis`, `encodeURI()`, `Number`, `RegExp`, etc.

:::tip
Reach out to [MDN | Standard built-in objects - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) for detailed built-in global objects/API references.
:::

## 2. Standardized Web Platform APIs

Besides the ECMAScript standard, a large number of web APIs are also been widely used and implemented by most javascript-based runtimes: chrome/firefox browsers, node/deno runtimes, etc. The full list of all web APIs and interfaces can be found in [MDN | Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), and the [WinterCG](https://wintercg.org/) community group come up with the [Minimum Common Web Platform API](https://common-min-api.proposal.wintercg.org/) specification, which defines a minimum set of standard web platform APIs to both browser and non-browser javascript-based runtimes. Rsvim also follows the WinterCG standards, but (maybe) provide a subset of these APIs due to the development effort.

The web APIs are also "global objects", and can be accessed without `import`/`require` any additional/external modules, just like javascript/ecmascript standard built-in global objects/APIs.

## 3. Rsvim Specialized APIs

Similar to node/deno, Rsvim also provide a set of non-standard APIs to help users manipulating both the editor and the operating system. The APIs can be divided into several groups: editor related, general purposed.

### 2.1. Editor APIs

Editor APIs are for the text editor itself, including windows, buffers, cursors, commands, etc. They can be accessed via the global object [`Rsvim`](rsvim/classes/Rsvim), similar to the [`vim`](https://neovim.io/doc/user/lua.html#Lua) namespace inside lua with Neovim.

### 2.2. General Purposed APIs

General purposed APIs are similar to the concept of the standard library of many scripting languages. From this perspective, there is no functional difference between Rsvim editor and general javascript runtimes such as [Node.js](https://nodejs.org/) and [Deno](https://deno.com/). But still, Rsvim focus on editing and text processing, the existence of general APIs serves this purpose as well, they provide functions mainly related to operating system such as file system, network/http, date and time, IPC/RPC and process management, etc. For web and browser related APIs, they will not be provided.

The general APIs share the same global object [`Rsvim`](rsvim/classes/Rsvim), the implementation keeps the same with [Deno APIs](https://docs.deno.com/api/deno/).
