---
sidebar_position: 6
---

# Create Plugin

This section introduces several points to note and tips about creating a Rsvim plugin.

## File Structure

If the plugin logic is quite simple and small, you can create a simple package without `package.json`. Otherwise you can create a npm package, and try to keep the plugin name same with the git repository, e.g. the package directory name:

```
./your_plugin_folder
|- your_plugin.js
```


