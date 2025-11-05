---
sidebar_position: 6
---

# Create Plugin

This section introduces several points to note and tips about creating a Rsvim plugin.

## File Structure

If the plugin logic is quite simple and small, you can create a simple package without `package.json`. Otherwise you can create a npm package.

You can put everything into a single javascript/typescript file, if it is just enough for you. It makes things super simple and easy, with least effort. Just create a javascript file named `your_plugin.js` (or a typescript file named `your_plugin.ts`):

```
./your_plugin_folder
|- your_plugin.js
```


