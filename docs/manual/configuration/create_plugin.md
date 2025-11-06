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
|- dist/
   |- index.js
|- src/
   |- index.ts
|- types/
   |- index.d.ts
|- package.json
|- tsconfig.json
```

1. `dist/` directory is for generated `.js` files.
2. `src/` directory is for typescript `.ts` source code files.
3. `types/` directory is optional for generated `.d.ts` declaration files. This is only used when you want to export typescript types (as a dependency for other plugins).
4. `package.json` file is for npm package configurations.
5. `tsconfig.json` file is for typescript compiler options.

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

1. `"declaration": true` indicates generate the `.d.ts` files when running `tsc` command.
2. `"declarationDir": "./types/"` indicates put the generated `.d.ts` files into `./types` directory.
3. `"outDir": "./dist/"` indicates put the generated `.js` files into `./dist/` directory.
4. `"rootDir": "./src/"` indicates typescript `.ts` source code files are in `./src/` directory.

#### Other Options

For other options, please refer to [ex.rsvim's tsconfig.json](https://github.com/rsvim/ex.rsvim/blob/main/tsconfig.json) as an example.

### `package.json`

#### ES Module

```json
{
    "type": "module",
}
```

Always set `"type"` to `"module"` to indicate this is a ES Module, because Rsvim only support ES Modules (e.g. the `import` keyword), Common JS is not supported, you cannot use the `require` keyword like node.


#### Package Entry

```json
{
    "exports": "./dist/index.js",
}
```

It indicates the `./dist/index.js` file is the entry for this npm package. Thus when user imports this plugin with:

```javascript
import your_plugin from "your_plugin";
```

User actually gets `your_plugin/dist/index.js` file, and Rsvim will never know about the `your_plugin/src/index.ts` typescript source code. Here typescript is just a language compiler and js files are the compiled output.

#### Types Declaration

```json
{
    "types": "./types/index.d.ts",
}
```

This is optional, it indicates your plugin's declaration types, this is useful if your plugin is a dependency for other plugins.

### `@rsvim/types`

Once start writing code, you will soon find that your typescript LSP doesn't work, e.g. it cannot provide any code-completion or lint information for you. This is because typescript doesn't know Rsvim runtime yet.

So Rsvim also provides type declarations for itself, e.g. the [`@rsvim/types`](https://www.npmjs.com/package/@rsvim/types) npm package. It doesn't provide any APIs or modules, but only types declarations. Because Rsvim by default exports the `Rsvim` global object and other Web APIs (such as `setTimeout`, `TextEncoder`, etc).

#### Latest Stable

Run `npm install @rsvim/types --save-dev` to install the `@rsvim/types` package as a development dependency. The `package.json` file will become:

```json
{
    "devDependencies": {
        "@rsvim/types": "^0.2.0"
    }
}
```

And add below options to `tsconfig.json` to introduce it to typescript compiler:

```json
{
    "typeRoots": ["./node_modules/@rsvim"],
}
```

#### Nightly/Main

If you want to use build a plugin that working on nightly or main branch of Rsvim, you will have to copy the [`types`](https://github.com/rsvim/rsvim/tree/main/types) directory in Rsvim to `./src/@rsvim/types` directory in your local project:

```
./your_plugin
|- dist/
   |- index.js
|- src/
   |- index.ts
   |- @rsvim/types/   <-- Copied here
|- types/
   |- index.d.ts
|- package.json
|- tsconfig.json
```

And add below options to `tsconfig.json`:

```json
{
    "typeRoots": ["./src/types/@rsvim"],
}
```

#### Legacy Version

For legacy versions, 
