---
sidebar_position: 6
---

# Create Plugin

Creating Rsvim plugin is equivalent to creating a npm package, while Rsvim is not node/deno, there are still several tips and points to note.

## Use TypeScript

Using [TypeScript](https://www.typescriptlang.org/) as the plugin developing language is recommended if you want to build something big, and ensure the code quality to avoid unexpected runtime issues.

### Project Structure

A recommended project structure is:

```
./your_plugin
|- dist/     <-- Generated .js files
|- src/      <-- Source code .ts files
|- types/    <-- (Optional) Generated declaration .d.ts files
|- package.json
|- tsconfig.json
```

### `tsconfig.json`

#### Code-Generation Standard

Rsvim uses almost the latest V8 engine, which sticks to the latest ECMA standard, thus "esnext" is recommended to generate modern js code. We don't need to assume any technical debt.

```json
{
    "lib": ["esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "esnext",
}
```

#### `package.json`

It specifies npm package configurations:

```json
{
    "type": "module",
    "exports": "./dist/index.js",
    "types": "./types/index.d.ts",
}
```

:::warning
1. Set `"type"` to `"module"` to indicate this is a ES Module, because Rsvim only support ES Modules (e.g. the `import` keyword), Common JS is not supported, you cannot use the `require` keyword like node.
2. Set `"type"` to `"module"` to indicate this is a ES Module, because Rsvim only support ES Modules (e.g. the `import` keyword), Common JS is not supported, you cannot use the `require` keyword like node.
:::

