#!/bin/bash

# set -x

CUR_DIR="${PWD}"
RSVIM_DIR="${PWD}/../rsvim"
RSVIM_SRC_DIR="$RSVIM_DIR/rsvim_core/src/js/runtime"
API_DOCS_DST_DIR="${PWD}/docs/api"
TMP_SRC_DIR="${PWD}/.tmp-src"
TMP_DOC_DIR="${PWD}/.tmp-doc"
IMPORT_META_DOC="${PWD}/docs/api/00__web/interfaces/ImportMeta.md"
TMP_IMPORT_META_DOC="${PWD}/.tmp-ImportMeta.md"

echo "CWD:$CUR_DIR"
echo "RSVIM dir:$RSVIM_DIR"
echo "RSVIM source code dir:$RSVIM_SRC_DIR"
echo "TMP source dir:$TMP_SRC_DIR"
echo "TMP document dir:$TMP_DOC_DIR"
echo "ImportMeta doc:$IMPORT_META_DOC"
echo "TMP ImportMeta doc:$TMP_IMPORT_META_DOC"

if [ ! -d "$RSVIM_DIR" ]; then
  echo "Error! RSVIM dir ($RSVIM_DIR) not exist, exit..."
  exit 1
fi
if [ ! -d "$RSVIM_SRC_DIR" ]; then
  echo "Error! RSVIM source code dir ($RSVIM_SRC_DIR) not exist, exit..."
  exit 1
fi

# cleanup tmp
rm -rf $TMP_SRC_DIR
rm -rf $TMP_DOC_DIR
rm -rf $TMP_IMPORT_META_DOC

echo "Copy RSVIM source code ($RSVIM_SRC_DIR) to $TMP_SRC_DIR"
cp -rf $RSVIM_SRC_DIR $TMP_SRC_DIR
echo "Copy ImportMeta doc ($IMPORT_META_DOC) to $TMP_IMPORT_META_DOC"
cp -rf $IMPORT_META_DOC $TMP_IMPORT_META_DOC

echo "Run: npm run typedoc"
npm run typedoc

copy_api_doc() {
  local name="$1"
  local api_doc="$API_DOCS_DST_DIR/$name"
  local gen_doc="$TMP_DOC_DIR/$name"
  echo "Copy generated docs ($gen_doc) to $API_DOCS_DST_DIR"
  rm -rf $api_doc
  cp -rf $gen_doc $API_DOCS_DST_DIR
}

copy_api_doc "00__web"
copy_api_doc "01__rsvim"

# cleanup
rm -rf $TMP_SRC_DIR
rm -rf $TMP_DOC_DIR

echo "Run: git status"
git status
echo "Run: tree $API_DOCS_DST_DIR"
tree $API_DOCS_DST_DIR
