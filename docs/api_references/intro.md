---
sidebar_position: 1
---

# Introduction

:::warning
Rsvim editor exposes the rust implemented APIs to the JavaScript world by binding them to the `__InternalRsvimGlobalObject` global object, which should never be directly used.
:::

The Rsvim editor provides the following APIs:

## 1. JavaScript standard built-in objects

JavaScript's standard built-in objects are all "global objects", i.e. they are available without importing any external modules. For example `globalThis`, `encodeURI()`, `Number`, `RegExp`, etc. The most accurate and authoritatie documentation is the [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/), which is also sticked by the V8 javascript engine embedded in Rsvim.

This doc site is not going to provide any documentations for these standard built-in objects, please reach out to other resources such as as [MDN | Standard built-in objects - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

## 2. Non-standard runtime APIs

ECMAScript standard (and V8 engine) only contains a small set, Rsvim editor provides all the other APIs for the javascript runtime. They can be divided into several types: editor related, general purposed and web platform.

### 2.1. Editor APIs

Editor APIs are for everything about the Rsvim editor, including windows, buffers, cursors, commands, etc. With the idea of transforming the Rsvim editor into a scripting language interpreter/runtime/virtual machine, literally scripting with editor APIs is the only way to interact with Rsvim inside the scripts. For others such as ex commands and key mappings, they are only user interfaces.

The editor APIs can be accessed via the global object [`Rsvim`](rsvim/classes/Rsvim), similar to the [`vim`](https://neovim.io/doc/user/lua.html#Lua) namespace inside lua with Neovim.

### 2.2. General APIs

General APIs are similar to the concept of the standard library of many scripting languages. From this perspective, there is no functional difference between Rsvim editor and general javascript runtimes such as [node.js](https://nodejs.org/) and [deno](https://deno.com/). But still, Rsvim focus on editing and text processing, the existence of general APIs serves this purpose as well, they provide functions mainly related to operating system such as file system, network/http, date and time, IPC/RPC and process management, etc. For web and browser related APIs, they will not be provided.

The general APIs share the same global object [`Rsvim`](rsvim/classes/Rsvim), the implementation keeps the same with [Deno APIs](https://docs.deno.com/api/deno/).

### 2.3. Web APIs

Besides the ECMAScript standard, a large number of web APIs are also "global objects", provided by most browsers and javascript runtimes (including node and deno). The full list of all web APIs and interfaces can be found in [MDN | Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), and the [WinterCG](https://wintercg.org/) community group come up with the [Minimum Common Web Platform API](https://common-min-api.proposal.wintercg.org/) specification, which defines a minimum set of standard web platform APIs to both browser and non-browser javascript-based runtimes. Consistent with the principles of general APIs, Rsvim only provides a subset of them.

The web APIs are "global objects", and can be accessed without importing any external modules just like javascript standard built-in objects.
