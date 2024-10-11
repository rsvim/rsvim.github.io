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
cp -rf $REPOSITORY/src/js/runtime $JSRUNTIME

echo "npm run typedoc"
npm run typedoc

API_REF="${PWD}/docs/api_references"
echo "copy generated docs to ${API_REF}"
rm -rf ${API_REF}/10__web
rm -rf ${API_REF}/50__rsvim
cp -rf ${GENERATED_TYPEDOCS}/10__web ${API_REF}
cp -rf ${GENERATED_TYPEDOCS}/50__rsvim ${API_REF}

echo "git status"
git status
echo "tree ./docs/api_references"
tree ./docs/api_references
