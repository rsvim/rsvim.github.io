# Welcome to RSVIM Documentation!

### Setup

To setup local environment, please install below dependencies:

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i`.
3. (Optional) Set npm cache folder with `npm config set cache ./.npm --global`, then verify with `npm --global cache verify`.

### Deployment

To start local service, please run below commands:

1. `npm install`
2. `npm run start`

To build production docs, please run below commands:

1. `npm run build`
2. `npm run serve`

### Format

To format docs, please install below formatters:

- [`prettier`](https://prettier.io/)

### Generate API Docs

To sync API docs from [rsvim](https://github.com/rsvim/rsvim), please follow below steps:

1. Clone the `rsvim` repo along with _this_ repo under the same directory.
2. Run `./gendoc.sh` scripts to sync all API docs.

### Search

To configure search index, please go to [Doc Search](https://docsearch.algolia.com/).

### Versioning

To tag a version, please run command: `npm run docusaurus docs:version 0.1.0`. See [Docusaurus - Versioning](https://docusaurus.io/docs/versioning).

### Images

To create SVG image, please use [draw.io desktop](https://github.com/jgraph/drawio-desktop/releases).
