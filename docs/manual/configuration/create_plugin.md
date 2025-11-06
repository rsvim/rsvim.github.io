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

:::tip
1. `dist/` folder is for generated `.js` files.
2. `src/` folder is for typescript `.ts` source code files.
3. `types/` folder is optional for generated `.d.ts` declaration files. This is only used when you want to export typescript types (as a dependency for other plugins).
:::

### `tsconfig.json`

#### Code Generation

Rsvim uses almost the latest V8 engine, which sticks to the latest ECMA standard, thus "esnext" is recommended to generate modern js code. We don't need to assume any technical debt.

```json
{
    "lib": ["esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "esnext",
}
```

#### Input and Output

Specify the input ts code for `tsc`, output js code, and optional `.d.ts` declaration files if you want to exports some typescript types (as a dependency for other plugins).

```json
{
    "declaration": true,
    "declarationDir": "./types/",
    "outDir": "./dist/",
    "rootDir": "./src/",
}
```

:::tip
1. `"declaration": true` indicates generate the `.d.ts` files when running `tsc` command.
1. `"declarationDir": "./types/"` indicates put the generated `.d.ts` files into the `./types` folder.
:::


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

