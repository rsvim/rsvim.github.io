---
title: Motivation
authors: [linrongbin16]
tags: [vim, neovim, rsvim, vscode]
---

Vim and Neovim editors are so popular and loved by software developers and text writers from all over the world, so am I. During the Vim's development lead by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar), there's always a trend that users want to make Vim an IDE, by providing all kinds of plugins: file explorer, UI widgets and icons, code completion, diagnostics, formatters, integrations with third-party command utils, etc.

Then Neovim came along in [2014](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim>), with the goal of providing more friendly functionalities for developers, and closer to the IDE editing experiences. It introduces [lua](https://www.lua.org/) as its scripting language and [LuaJIT](https://luajit.org/) as the scripts runtime. This is quite controversial at the beginning since lua is somehow not very popular and successful, unlike [python](https://www.python.org/) or [javascript](https://en.wikipedia.org/wiki/JavaScript). Before Neovim and lua, Vim community usually leverages python and javascript (even [typescript](https://www.typescriptlang.org/)) (on a runtime such as [nodejs](https://nodejs.org/)) for complex plugins such as code-complete, file explorer, etc.

The [vimscript](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script>) is somehow a minority and discourage people to create their plugins or contribute to the Vim project itself. Maybe it's also related to its documentation and grammar design.

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

:::

For example, use JSX to create an interactive button:

```js
<button onClick={() => alert("button clicked!")}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>
