---
sidebar_position: 5
---

# Script (JavaScript/TypeScript)

Script is to configure Rsvim editor behaviors, it will drives everything about Rsvim editor for us.

As Rsvim is build with [Rust](https://www.rust-lang.org/), using [Tokio](https://tokio.rs/) as async runtime, [Google's V8](https://v8.dev/) engine (and [rusty bindings](https://github.com/denoland/rusty_v8) provided by [Deno team](https://deno.com/)) as script interpreter, it can be seen as a javascript-based runtime just like [Node.js](https://nodejs.org/en) and Deno, but specialized for terminal based text editing/processing, by taking over the control of `stdio`, i.e. the `stdin` of rsvim process is hooked by terminal keyboard/mouse events, the `stdout`/`stderr` are hooked by terminal text rendering.

In one way, you can think of javascript script as a configuration solution, a plugin development platform. In another way, you can think of Rsvim as a javascript-based runtime since it (will) also provides "ECMAScript standard built-in APIs" and "web platform APIs", they are widely implemented by most javascript-based runtimes: chrome/firefox browsers, node/deno runtimes, etc. But Rsvim editor focus on text editing and processing, the existence of all the APIs only serves this purpose, they are mostly related to manipulating operating system such as file system, network/http, date time, IPC/RPC, process management, etc. Web and browser related APIs will not be provided.

In this way, the javascript APIs provided by Rsvim, is literally the only way to interact with Rsvim in scripts. For other things such as Vim commands and key mappings, they are only user interfaces backed with js functions.
