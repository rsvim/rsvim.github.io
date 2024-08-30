---
title: Motivation
authors: [linrongbin16]
tags: [vim, neovim, rsvim, vscode]
---

Vim and Neovim editors are so popular and loved by software developers and text writers from all over the world, so am I. During the Vim's development lead by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar), there's always a trend that users want to make Vim an IDE, by providing all kinds of plugins: file explorer, UI widgets and icons, code completion, diagnostics, formatters, integrations with third-party command utils, etc. Even though Vim uses [vimscript](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script>) as its first-class citizen, it's still somehow a minority and discourage people to create their plugins or contribute to Vim project itself, maybe it's also related to the documentation and grammar design. The confliction between Vim's extensibility and user's requirements is growing.

Then Neovim came along in [2014](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim>), with the goal of providing more friendly functionalities for developers and closer to the IDE editing experiences, by introducing [lua](https://www.lua.org/) as its scripting language and [LuaJIT](https://luajit.org/) as the scripts runtime. This is quite controversial at the beginning since lua is somehow not very popular and successful, unlike [python](https://www.python.org/) or [javascript](https://en.wikipedia.org/wiki/JavaScript)/[typescript](https://www.typescriptlang.org/) (on a runtime such as [node.js](https://nodejs.org/)). Before Neovim and lua, Vim community usually leverage these external languages for complex plugins such as code-completion, file explorer, etc. But the overhead is the [IPC](https://en.wikipedia.org/wiki/Inter-process_communication) across the editor instance and language interpreter/runtime process.

Turns out Neovim's choice is successful, luajit improves the performance a lot, and lua provides a much better grammar (compares with vimscript) that helps user handle more code logic. It encourages more user to create their own plugins and provide more features. At the same time, Vim brings [vimscript9](https://www.vim.org/vim90.php) as a better script, but still lots of efforts are needed. Obviously it's much easier and faster to embed a script language that is ready to use.

Script language [plays a most important role in (Neo)Vim editor, it also turns the editor into a script interpreter/runtime/virtual machine](https://github.com/rsvim/rfc/blob/873cf96ca2ea256c0694e9396816b2ded827d08a/2-JavascriptEngine.md?plain=1#L9). When looking at (Neo)Vim editor as a language interpreter, people start to think about more topics:

- Modern programming language features, for example functional programming (closure), builtin async/await, static type, etc.
- Package manager and registry, for example [luarocks](https://luarocks.org/) for lua, [npm](https://www.npmjs.com/) for js/ts, [pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) for python.

The disadvantages of choosing lua gradually emerged, after all it's limited by the poor grammar design and community support, far behind popular script languages mentioned above.

This is why when I'm looking at the (Neo)Vim editor, the idea to reinvent it with Rust+Javascript suddenly popped up. Compares with C/C++, Rust provides so much powerful and productive features and toolchains, with a active developing community that can leverage. When thinking about the script language, we would want one that has:

- Modern programming language features and package management mentioned above.
- Popular and widely used, with active developing community.
- Great performance that won't make the editor laggy.

The options are few: python is too slow, other scripts such as lua/vimscript/lisp are not so popular.

The cons:

- The language itself is actually evil and chaotic, success belongs to network and browser. But today we have typescript

- Functional programming features such as closure, pattern matching, etc.
- Memory safety, lifetime, borrow check.
- Async/await support.
- Error handling,
- More powerful/productive language features such as many functional programming features, lifetime,
  much more powerful language features, toolchains and community libraries/frameworks. And Javascript engines such as [V8](https://v8.dev/), [QuickJS](https://bellard.org/quickjs/) also provide great solutions to be possible to embed it into a command line.
