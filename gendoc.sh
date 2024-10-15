#!/bin/bash

# Please setup this script with:
# 1. `npm install -g typedoc`
# 2. `npm install`

echo "(rsvim.github.io) PWD=${PWD}"
REPOSITORY="${PWD}/../rsvim"
echo "(rsvim) REPOSITORY=${REPOSITORY}"

JSRUNTIME="${PWD}/jsruntime"
GENERATED_TYPEDOCS="${PWD}/generated-typedocs"
echo "copy typescripts to $JSRUNTIME"
rm -rf ./jsruntime
rm -rf ./generated-typedocs
cp -rf $REPOSITORY/rsvim_core/src/js/runtime $JSRUNTIME

echo "npm run typedoc"
npm run typedoc

API="${PWD}/docs/api"
echo "copy generated docs to ${API}"
rm -rf ${API}/10__web
rm -rf ${API}/50__rsvim
cp -rf ${GENERATED_TYPEDOCS}/10__web ${API}
cp -rf ${GENERATED_TYPEDOCS}/50__rsvim ${API}

echo "git status"
git status
echo "tree ${API}"
tree ${API}
