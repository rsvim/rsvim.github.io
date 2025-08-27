---
sidebar_position: 1
---

# Get Started

:::tip
If you need JavaScript API references you can find them in [API References](/docs/api/intro).
:::

Rsvim is the Vim editor reinvented in Rust+TypeScript. It follows main features, concepts and philosophy of [Vim](https://www.vim.org/) and [Neovim](https://neovim.io/), developed with [rust](https://www.rust-lang.org/), [tokio](https://tokio.rs/) and [V8](https://v8.dev/) javascript engine. All components are built from scratch and redesigned/reinvented with a modern development approach rather than copy-paste. The most prominent one among the many highlights of Rsvim is: it uses [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (or say, [ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)) and [TypeScript](https://www.typescriptlang.org/) as its configuration script languages with first-class citizen support.

What makes Rsvim distinguishes from other two Vim editors:

- With tokio's async/multithreaded runtime, most IO operations can be processed asynchronously to avoid blocking TUI app.
- JavaScript's `Promise`, `async`/`await` has builtin support, async tasks are handled along with terminal keyboard/mouse events and contents output, and all other various IO, network and CPU bounding tasks.
- Most javascript APIs (will) have both **Asynchronous** and **Synchronous** versions, and asynchronous version is highly recommended for plugins development.
- Typescripts can be parsing and transforming into javascripts and executed by V8 engine as well.
- The `stdin`, `stdout`, `stderr` is handled by

Rsvim is built by the [rsvim](https://github.com/rsvim) community. The project is hosted on [GitHub](https://github.com/rsvim/rsvim), documentation is hosted on [GitHub Page](https://rsvim.github.io/). Both Rsvim and its documentation are licensed under [Vim License](https://github.com/rsvim/rsvim/blob/main/LICENSE.txt), same with the [Vim](https://github.com/vim/vim) project.
