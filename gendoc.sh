#!/bin/bash

# set -x

CUR_DIR="${PWD}"
RSVIM_DIR="${PWD}/../rsvim"
RSVIM_JSRUNTIME_SRC_DIR="$RSVIM_DIR/rsvim_core/src/js/runtime"
API_DOCS_DST_DIR="${PWD}/docs/api"
TMP_JSRUNTIME_DIR="${PWD}/jsruntime"
TMP_GENERATED_DIR="${PWD}/generated-typedocs"

echo "CWD:$CUR_DIR"
echo "RSVIM dir:$RSVIM_DIR"
echo "RSVIM jsruntime source dir:$RSVIM_JSRUNTIME_SRC_DIR"
echo "TMP jsruntime dir:$TMP_JSRUNTIME_DIR"
echo "TMP generated dir:$TMP_GENERATED_DIR"

if [ ! -d "$RSVIM_DIR" ]; then
  echo "Error! RSVIM dir ($RSVIM_DIR) not exist, exit..."
  exit 1
fi
if [ ! -d "$RSVIM_JSRUNTIME_SRC_DIR" ]; then
  echo "Error! RSVIM jsruntime source dir ($RSVIM_JSRUNTIME_SRC_DIR) not exist, exit..."
  exit 1
fi

# cleanup old
rm -rf $TMP_JSRUNTIME_DIR
rm -rf $TMP_GENERATED_DIR

echo "copy RSVIM jsruntime source ($RSVIM_JSRUNTIME_SRC_DIR) to $TMP_JSRUNTIME_DIR"
cp -rf $RSVIM_JSRUNTIME_SRC_DIR $TMP_JSRUNTIME_DIR

echo "npm run typedoc"
npm run typedoc

copy_api_doc() {
  local name="$1"
  local api_doc="$API_DOCS_DST_DIR/$name"
  local gen_doc="$TMP_GENERATED_DIR/$name"
  echo "copy generated docs ($gen_doc) to $API_DOCS_DST_DIR"
  rm -rf $api_doc
  cp -rf $gen_doc $API_DOCS_DST_DIR
}

copy_api_doc "00__web"
copy_api_doc "01__rsvim"

# cleanup
rm -rf $TMP_JSRUNTIME_DIR
rm -rf $TMP_GENERATED_DIR

echo "git status"
git status
echo "tree $API_DOCS_DST_DIR"
tree $API_DOCS_DST_DIR
