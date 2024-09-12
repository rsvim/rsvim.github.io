---
title: Motivation
authors: [linrongbin16]
tags: []
---

[Vim](https://www.vim.org/) and [Neovim](https://neovim.io/) editors are so popular and loved by developers and text writers all over the world, including me.

## History

During the development of Vim led by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar), there has always been a trend that users want to turn Vim into an IDE by providing all various plugins: file explorer, UI components and icons, code completion, diagnostics, code formatting, etc. Vim uses [vimscript](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script>) as its first-class citizen to support, but this is somewhat niche and hinders people from creating their own plugins or contributing to the Vim project itself (perhaps it is also related to the documentation and syntax design of vimscript). The conflict between Vim's extensibility and user needs has been growing.

<!-- truncate -->

Then Neovim came along in [2014](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim>). In order to provide richer and more friendly functions, as well as editing experiences closer to IDE, it introduced [lua](https://www.lua.org/) as its script language and [LuaJIT](https://luajit.org/) as its script runtime. This caused a lot of controversy at the beginning, since lua not only brought quite break changes that are no longer compatible with vimscript (as a scripting language designed for Vim, vimscript is indeed more fittable into the editor), and is not as popular among developers as [python](https://www.python.org/) or [javascript](https://en.wikipedia.org/wiki/JavaScript)/[typescript](https://www.typescriptlang.org/). Before the emergence of Neovim and lua, Vim community usually used these external languages to implement complex plugins, such as auto-completion, file explorer, etc. However, the [IPC](https://en.wikipedia.org/wiki/Inter-process_communication) overhead between the editor itself and the language interpreter/runtime cannot be elimiated, and adding an additional language cannot be used not out of box.

Neovim's choice has proven to be successful, with luajit greatly improving the performance and lua providing a much better syntax (compared to vimscript) for handling user's own logic. This has encouraged more users to create their own plugins (including myself) and contribute to the Neovim project. At the same time, Vim brought [vimscript9](https://www.vim.org/vim90.php) as a better scripting language to replace the original vimscript, but this still requires a lot of effort, including development/maintenance as well as time and user feedback. Obviously it is much easier and faster to embed a ready-made scripting language.

## Script

Script [plays a most important role in the (Neo)Vim editor: it drives the appearance and behavior of the editor, schedules background tasks, is responsible for communicating with remote processes, and so on. It also turns the editor into a language interpreter/runtime/virtual machine](https://github.com/rsvim/rfc/blob/873cf96ca2ea256c0694e9396816b2ded827d08a/2-JavascriptEngine.md?plain=1#L9) at the same time. When regarding the (Neo)Vim editor as a language interpreter, we will start to think about more topics:

- Modern programming language features:
  - Functional programming: closures, no side effects, etc.
  - Built-in async/await.
  - Static type
  - And a lot more.
- Package management, upgrades and distribution. For example:
  - [Luarocks](https://luarocks.org/) for lua.
  - [Npm](https://www.npmjs.com/) for js/ts.
  - [Pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) for python.

The disadvantages of choosing lua gradually emerged, after all it's limited by the poor grammar design and community support, far behind popular script languages mentioned above.

This is why when looking at the (Neo)Vim editor, the idea to reinvent it with rust+javascript suddenly popped up. Compares with c/c++, rust provides so much powerful and productive features, also the toolchains, the active developing communities. As for the script, we would want one has:

- Modern programming language features and package management mentioned above.
- Popular and widely used, with active developing community.
- Great performance that won't make the editor laggy.

We don't have many options:

- Python is too slow.
- Other scripts such as lua/vimscript/lisp are not so popular, some new scripts are too young and not widely used.

Javascript meets most of the requirements, enterprise spent millions of dollars and tons of engineering hours on the [V8](https://v8.dev/) engine, community also comes up with [QuickJS](https://bellard.org/quickjs/), both are great solutions to embed into command line. However, js grammar is bad and chaotic, success actually belongs to the network and browser industry, not js itself. So the final target is [scripting with typescript, js can play the role of the middle layer under the hood](https://github.com/rsvim/rfc/blob/873cf96ca2ea256c0694e9396816b2ded827d08a/2-JavascriptEngine.md?plain=1#L25). Ts makes up for some shortcomings of js:

- More elegant and beautiful grammar design.
- Static type.
- Fully compatible with js and the community.

## TUI

Another strong trend is: more and more plugins are providing complicated TUI widgets by customizing [floating windows](https://neovim.io/doc/user/api.html#_floating-windows) and [buffers](https://vimhelp.org/windows.txt.html#buffers). TUI libraries/frameworks also show up, they treat (Neo)Vim as a screen that contains UI widgets. This idea leads to the modern GUI frameworks and even web UI components, for example [Qt](https://www.qt.io/), [Tk](https://www.tcl.tk/)/[Tkinter](https://docs.python.org/3/library/tkinter.html), [Material UI](https://mui.com/material-ui/), [Iced](https://iced.rs/).

Most GUI frameworks support below features:

1. Coordinate system: Manages widget shapes, positions and sizes on plain 2-dimensions coordinates, as well as conflicts and overlaps on 3-dimensions by introducing the Z-index.
2. Event handling: (Since user keyboard/mouse events can be located by shapes and positions, thus can be) dispatched to the handlers (callbacks) binded on the corresponding widgets and simplify user logic handling.
3. Layout: shapes can be fixed or flexible, even managed by [css flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) like rows, columns and grids.
4. Specialized widgets: button, popup, dialog, contents previewer, text editer, etc.

By introducing a TUI engine with such concepts, it improves visual effects, standardizes widget behaviors, and reduces plugin developing efforts.
