# Welcome to RSVIM Documentation!

### Setup

To setup local environment, please install below dependencies:

1. Install [mise](https://github.com/jdx/mise).
2. Run `mise i` to install python, node and other npm cli tools.
3. Run `npm i` to install npm dependencies, including docusaurus.

### Development

- To start local service, please run command `npm start`.
- To build production artifacts, please run command `npm run build`.
- To format source code and docs, please run `prettier -w .`.
- To sync API docs from [rsvim](https://github.com/rsvim/rsvim), please follow below steps:
  1. Clone [rsvim](https://github.com/rsvim/rsvim) repo in the sibling position with _this_ repo under the same parent directory.
  2. Run the `./gendoc.py` script to generate all API docs.
- To configure searching index, please go to [Doc Search](https://docsearch.algolia.com/).
- To tag a version, please run command: `npm run docusaurus docs:version 0.1.0` (see [Docusaurus - Versioning](https://docusaurus.io/docs/versioning)).
- To create SVG image, please use [draw.io desktop](https://github.com/jgraph/drawio-desktop/releases).
