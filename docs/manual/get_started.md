---
sidebar_position: 1
---

# Get Started

:::tip
If you need JavaScript API references you can find them in [API References](/docs/api/intro).
:::

Rsvim is the Vim editor reinvented in Rust+TypeScript. It follows main features, concepts and philosophy of [Vim](https://www.vim.org/) and [Neovim](https://neovim.io/), developed with [rust](https://www.rust-lang.org/), [tokio](https://tokio.rs/) and [V8](https://v8.dev/) javascript engine. All components are built from scratch and redesigned/reinvented with a modern development approach rather than copy-paste. The most prominent one among the many highlights of Rsvim is: it uses [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (or say, [ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)) and [TypeScript](https://www.typescriptlang.org/) as its configuration script languages with first-class citizen support.

What makes Rsvim distinguishes from other two Vim editors:

- With tokio's async/multithreaded runtime, terminal keyboard/mouse events and contents output are processed asynchronously, along with all various IO, network and CPU bounding tasks.
- JavaScript's `Promise`, `async`/`await` is builtin supported by tokio's async runtime as well, multiple files configuration are structured via [ESCM modules](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html) `import` keyword implementation.
- Typescript can be parsed and transformed into javascripts and executed by V8 engine on the fly.
- (**TODO**) [Npm package](https://www.npmjs.com/) is also accepted as a compatible plugin schema, thus npm registry can be leveraged to publish/upgrade/distribute all the plugins.

From one perspective, you can think of javascript/typescript as a configuration language for Rsvim. In another, you can think of Rsvim as a javascript-based runtime just like [Node.js](https://nodejs.org/) and [Deno](https://deno.com/). But specialized for text editor, i.e. `stdin` is for receiving terminal keyboard/mouse events, `stdout` is for rendering text contents.

Rsvim is built by the [rsvim](https://github.com/rsvim) community. The project is hosted on [GitHub](https://github.com/rsvim/rsvim), documentation is hosted on [GitHub Page](https://rsvim.github.io/). Both Rsvim and its documentation are licensed under [Vim License](https://github.com/rsvim/rsvim/blob/main/LICENSE.txt), same with the [Vim](https://github.com/vim/vim) project.
