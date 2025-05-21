---
sidebar_position: 1
---

# Get Started

Rsvim is the [Vim](https://www.vim.org/) editor reinvented in Rust+TypeScript, it (should) behaves almost the same, inherits their philosophy and shares most concepts among them. While it is completely developed from scratch, with multiple sub-components been redesigned/reinvented, 100% perfect compatible with existing Vim community in [Vimscript (or VimL)](https://en.wikipedia.org/wiki/Vimscript), [Neovim](https://neovim.io/) community in [Lua](https://neovim.io/doc/user/lua.html) is unrealistic, break changes are expected and unavoidable.

As Rsvim is build with [Rust](https://www.rust-lang.org/), using [Tokio](https://tokio.rs/) as async runtime, [Google's V8](https://v8.dev/) engine and [Rusty V8](https://github.com/denoland/rusty_v8) bindings (provided by [Deno team](https://deno.com/)) as script interpreter, it can be seen as a [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[TypeScript](https://www.typescriptlang.org/) script runtime just like [Node.js](https://nodejs.org/en) and Deno, but specialized for terminal based text editing/processing, by taking over the control of `stdio`.

This chapter introduces the manuals for Rsvim. If you need JavaScript APIs you can find them in [API References](/docs/api_references/intro). You can contribute to this document on [GitHub](https://github.com/rsvim/rsvim.github.io).
