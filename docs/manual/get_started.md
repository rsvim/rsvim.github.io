---
sidebar_position: 1
---

# Get Started

:::tip
JavaScript API references are available in [API References](/docs/api/introduction).
:::

Rsvim is the Vim editor reinvented in Rust+TypeScript. It follows main features, concepts and philosophy of [Vim](https://www.vim.org/) and [Neovim](https://neovim.io/), developed with [Rust](https://www.rust-lang.org/), [Tokio](https://tokio.rs/) and [V8 JavaScript engine](https://v8.dev/), with every component redesigned and/or reinvented from scratch in a modern development approach. The jewel in the crown of Rsvim is its first-class support for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (or say, [ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)) and [TypeScript](https://www.typescriptlang.org/) for configuration and scripting.

What distinguishes Rsvim from the other two:

- Given Tokio's async multithreaded runtime, terminal input is processed asynchronously with other file I/O, network and CPU-bound tasks.
- JavaScript `Promise`, `async`/`await` is natively handled by tokio's async tasks.
- Configuration or plugin across multiple files can be structured via [ESCM modules](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html) `import` keyword implementation.
- TypeScript can be parsed and transformed into JavaScript and executed on the V8 engine on the fly.
- (**TODO**) [NPM package](https://www.npmjs.com/) is also a compatible plugin schema; thereby the npm registry can be leveraged to publish/upgrade/distribute Rsvim plugins.

One might conceptualise JavaScript and TypeScript as configuration languages for Rsvim. Alternatively, Rsvim can be viewed as a specialised JavaScript-based runtime akin to [Node.js](https://nodejs.org/) and [Deno](https://deno.com/), but purpose-built for a text editor: `stdin` for receiving terminal inputs, `stdout` for rendering the interface.

A perfect compatibility with the existing [Vimscript](https://en.wikipedia.org/wiki/Vimscript) community (for Vim) and [Lua](https://neovim.io/doc/user/lua.html) community (for Neovim) would be unrealistic; expect unavoidable breaking changes.

Rsvim is developed by the [rsvim](https://github.com/rsvim) community. The project is hosted on [GitHub](https://github.com/rsvim/rsvim), with documentation available on [GitHub Pages](https://rsvim.github.io/). Both the software and its documentation are licensed under [Vim License](https://github.com/rsvim/rsvim/blob/main/LICENSE.txt) in accordance with the [Vim](https://github.com/vim/vim) project.
