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

ECMAScript standard (and V8 engine) only contains a small set, Rsvim editor provides all the other APIs for the javascript runtime. They can be divided into two types: editor related and general purposed.

## 2.1. Editor related APIs

Editor related APIs are for everything about the Rsvim editor, including windows, buffers, cursors, commands, etc. With the idea of transforming the Rsvim editor into a scripting language interpreter/runtime/virtual machine, literally scripting with editor APIs is the only way to interact with Rsvim (besides keyboard/mouse events). For other methods such as the Vim commands and key mappings, they are only user interfaces.

## 2.2. General purposed APIs
