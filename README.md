# Welcome to RSVIM Documentation!

### Setup

To setup local environment, please install below dependencies:

1. Install version management tool [mise](https://github.com/jdx/mise).
2. Run `mise i`.

### Deployment

To start local service, please run below commands:

1. `npm install`
2. `npm run start`

To build production docs, please run below commands:

1. `npm run build`
2. `npm run serve`

### Writing

To format docs, please install below formatters:

- [`prettier`](https://prettier.io/)

### Generate API Docs

To sync API docs from [rsvim](https://github.com/rsvim/rsvim), please follow below steps:

1. Clone the `rsvim` repo and place it with _this_ repo under the same directory.
2. Run `npm install -g typedoc` to install `typedoc` command.
3. Run `npm install` to install all dependencies.
4. Run `./gendoc.sh` scripts to sync all API docs.

### Search

To configure the Search index, please go to [Doc Search](https://docsearch.algolia.com/).

### Versioning

To tag a version, please run command (see [Docusaurus - Versioning](https://docusaurus.io/docs/versioning)): `npm run docusaurus docs:version 0.1.0`.

### Images

To create SVG image, please use [draw.io desktop](https://github.com/jgraph/drawio-desktop/releases).
