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

_00_WEB=00__web
_01_RSVIM=01__rsvim

rm -rf ${API}/${_00_WEB}
rm -rf ${API}/${_01_RSVIM}
cp -rf ${GENERATED_TYPEDOCS}/${_00_WEB} ${API}
cp -rf ${GENERATED_TYPEDOCS}/${_01_RSVIM} ${API}

echo "git status"
git status
echo "tree ${API}"
tree ${API}
