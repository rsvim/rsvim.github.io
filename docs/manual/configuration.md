---
sidebar_position: 5
---

# Configuration

Rsvim use javascript/typescript to configure its behavior, the script will drive everything for us.

As Rsvim is build with [Rust](https://www.rust-lang.org/), use [Tokio](https://tokio.rs/) as async runtime, [Google's V8](https://v8.dev/) engine (and [rusty bindings](https://github.com/denoland/rusty_v8) provided by [Deno](https://deno.com/) team) as script interpreter.

In one way, you can think of javascript script as a configuration solution, a plugin runtime. In another way, you can think of Rsvim as a javascript-based runtime just like [Node.js](https://nodejs.org/en) and [Deno](https://deno.com/), but specialized for terminal based text editing/processing, by taking over the control of `stdio`, i.e. the `stdin` is used for user keyboard/mouse events, the `stdout`/`stderr` are used for text typesetting/rendering. Rsvim (will) also provides [ECMAScript Standard Built-in APIs](/docs/api/intro#1-ecmascript-standard-built-in-apis) and [Web Platform APIs](docs/api/intro#2-web-platform-apis), they are widely implemented by most javascript-based runtimes: chrome/firefox browsers, node/deno runtimes, etc.

In this way, javascript APIs (provided by Rsvim) is literally the only way to interact with Rsvim (inside scripts). For other things such as Vim commands and key mappings, they are only user interfaces backed with js functions.
