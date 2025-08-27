---
sidebar_position: 1
---

# Get Started

:::tip
JavaScript API references are available in [API References](/docs/api/introduction).
:::

Rsvim is the Vim editor reinvented in Rust+TypeScript. It follows main features, concepts and philosophy of [Vim](https://www.vim.org/) and [Neovim](https://neovim.io/), developed with [Rust](https://www.rust-lang.org/), [Tokio](https://tokio.rs/) and [V8 JavaScript engine](https://v8.dev/), all components are redesigned/reinvented/reimplemented from scratch in a modern development approach. The most prominent one among many highlights of Rsvim is its first-class citizen support for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ([ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)) and [TypeScript](https://www.typescriptlang.org/) as configuration script.

What distinguishes Rsvim from other two:

- With Tokio's async multithreaded runtime, terminal input is processed asynchronously along with all various file I/O, network and CPU-bound tasks.
- JavaScript `Promise`, `async`/`await` is natively handled by tokio's async tasks.
- Multi-file modules and plugins are structured via [ESCM modules](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html) `import` keyword implementation.
- TypeScript is parsed and transformed into JavaScript and executed by V8 engine on the fly.
- (**TODO**) [NPM package](https://www.npmjs.com/) is accepted as a compatible plugin schema; thereby the npm registry can be leveraged to publish/upgrade/distribute all plugins.

You can conceptualise javascript and typescript as configuration languages for Rsvim. Alternatively, Rsvim can be treat as a highly specialised javascript-based runtime akin to [Node.js](https://nodejs.org/) and [Deno](https://deno.com/), but purpose-built for text editor: `stdin` for receiving terminal inputs, `stdout` for rendering the interface.

A perfect compatibility with the existing [Vimscript](https://en.wikipedia.org/wiki/Vimscript) community (for Vim) and [Lua](https://neovim.io/doc/user/lua.html) community (for Neovim) would be unrealistic; expect unavoidable breaking changes.

Rsvim is developed by the [rsvim](https://github.com/rsvim) community. The project is hosted on [GitHub](https://github.com/rsvim/rsvim), with documentation available on [GitHub Pages](https://rsvim.github.io/). Both the software and its documentation are licensed under [Vim License](https://github.com/rsvim/rsvim/blob/main/LICENSE.txt) in accordance with the [Vim](https://github.com/vim/vim) project.
