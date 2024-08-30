---
title: Motivation
authors: [linrongbin16]
tags: []
---

Vim and Neovim editors are so popular and loved by software developers and text writers from all over the world, so am I.

During the Vim's development lead by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar), there's always a trend that users want to make Vim an IDE, by providing all kinds of plugins: file explorer, UI widgets and icons, code completion, diagnostics, formatters, etc. Vim uses [vimscript](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script>) as its first-class citizen, which is somehow a minority and discourage people to create their plugins or contribute to Vim project (maybe related to the documentation and grammar design). The confliction between Vim's extensibility and user's requirements is growing.

<!-- truncate -->

Then Neovim came along in [2014](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim>). With the goal of providing more friendly functionalities for developers and closer to the IDE editing experiences, it introduced [lua](https://www.lua.org/) as script language and [LuaJIT](https://luajit.org/) as the scripts runtime. This is quite controversial at the beginning since lua is somehow not very popular and successful, unlike [python](https://www.python.org/) or [javascript](https://en.wikipedia.org/wiki/JavaScript)/[typescript](https://www.typescriptlang.org/) (running on a runtime such as [node.js](https://nodejs.org/)). Before Neovim and lua, Vim community usually leverage these external languages for complex plugins such as code-completion, file explorer, etc. But the overhead of [IPC](https://en.wikipedia.org/wiki/Inter-process_communication) across the editor instance and language interpreter/runtime process cannot be elimiated, and not out of box.

Turns out Neovim's choice is successful, luajit improves the performance a lot, and lua provides a much better grammar (compares with vimscript) on handling user logic. This encourages more users creating their own plugins (include myself) and contributing to Neovim project. At the same time, Vim brings [vimscript9](https://www.vim.org/vim90.php) as a better script, but still lots of efforts are needed. Obviously it's much easier and faster to embed a script that is ready to use.

Script [plays a most important role in (Neo)Vim editor, it also turns the editor into a language interpreter/runtime/virtual machine](https://github.com/rsvim/rfc/blob/873cf96ca2ea256c0694e9396816b2ded827d08a/2-JavascriptEngine.md?plain=1#L9) at the same time. When looking at (Neo)Vim editor as a language interpreter, people start to think about more topics:

- Modern programming language features:
  - Functional programming: iteration, closure, no side effects, etc.
  - Builtin async/await.
  - Static type
  - And a lot more.
- Package management, registry and distribution. For example:
  - [Luarocks](https://luarocks.org/) for lua.
  - [Npm](https://www.npmjs.com/) for js/ts.
  - [Pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) for python.

The disadvantages of choosing lua gradually emerged, after all it's limited by the poor grammar design and community support, far behind popular script languages mentioned above.

This is why when I'm looking at the (Neo)Vim editor, the idea to reinvent it with Rust+Javascript suddenly popped up. Compares with c/c++, rust provides so much powerful and productive features and toolchains, with a active developing community that can leverage. For the script language, we would want one that has:

- Modern programming language features and package management mentioned above.
- Popular and widely used, with active developing community.
- Great performance that won't make the editor laggy.

We don't have many options:

- Python is too slow.
- Other scripts such as lua/vimscript/lisp are not so popular, some new scripts are still too young and not widely used.

Javascript meets most of the requirements, enterprises/communities spent millions of dollars and tons of engineering hours on engines such as [V8](https://v8.dev/) and [QuickJS](https://bellard.org/quickjs/), which are great solutions to embed into command line. But wait, js grammar is bad and chaotic, success actually belongs to the network and browsers industry, not js itself. So hope to [support typescript as the first-class citizens, js can play the role of the middle layer under the hood](https://github.com/rsvim/rfc/blob/873cf96ca2ea256c0694e9396816b2ded827d08a/2-JavascriptEngine.md?plain=1#L25). Ts makes up for some shortcomings of js:

- More elegant and beautiful grammar design.
- Static type.
- Fully compatible with js and the community.

Another strong trend is that, more plugins are providing complicated TUI widgets by customizing [windows](https://vimhelp.org/windows.txt.html#windows)/[buffers](https://vimhelp.org/windows.txt.html#buffers). TUI librariy/framework also shows up. This brings the idea to provide a more powerful TUI engine for Vim users.
