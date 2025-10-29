#!/usr/bin/env python3

# Formatted with ruff.

import logging
import os
import shutil
from pathlib import Path

CWD = Path(os.getcwd())
RSVIM_SRC = CWD.parent / "rsvim" / "runtime"
GHPAGE_SRC = CWD / ".runtime"
GHPAGE_DOC = CWD / ".typedoc"
IMPORT_META_DOC = CWD / "docs" / "api" / "00__web" / "interfaces" / "ImportMeta.md"
IMPORT_META_DOC_SWAP = CWD / ".ImportMeta.md.swap"
GHPAGE_API = CWD / "docs" / "api"


def precheck():
    if not RSVIM_SRC.exists():
        logging.error(f"RSVIM_SRC ({RSVIM_SRC}) doesn't exist, exit...")
        exit(1)


def prepare_dirs():
    if GHPAGE_SRC.exists():
        shutil.rmtree(GHPAGE_SRC)
    if GHPAGE_DOC.exists():
        shutil.rmtree(GHPAGE_DOC)
    if IMPORT_META_DOC_SWAP.exists():
        shutil.rmtree(IMPORT_META_DOC_SWAP)
    logging.info(
        f"Copy runtime typescripts from RSVIM_SRC ({RSVIM_SRC}) to GHPAGE_SRC ({GHPAGE_SRC})"
    )
    shutil.copytree(RSVIM_SRC, GHPAGE_SRC)
    logging.info(
        f"Temporarily swap IMPORT_META_DOC ({IMPORT_META_DOC}) to IMPORT_META_DOC_SWAP ({IMPORT_META_DOC_SWAP})"
    )
    shutil.copyfile(IMPORT_META_DOC, IMPORT_META_DOC_SWAP)


def generate_typedoc():
    command = "npm run typedoc"
    logging.info(f"Run: {command}")
    os.system(command)


def place_typedoc_for(filename: str):
    gen_doc = GHPAGE_DOC / filename
    api_doc = GHPAGE_API / filename
    logging.info(f"Copy generated typedoc from {gen_doc} to {api_doc}")
    shutil.rmtree(api_doc)
    shutil.copytree(gen_doc, api_doc)


def place_typedoc():
    for filename in ["00__web", "01__rsvim"]:
        place_typedoc_for(filename)
    logging.info(
        f"Swap IMPORT_META_DOC_SWAP ({IMPORT_META_DOC_SWAP}) back to IMPORT_META_DOC ({IMPORT_META_DOC})"
    )
    shutil.copyfile(IMPORT_META_DOC_SWAP, IMPORT_META_DOC)


def postcheck():
    command = "git status"
    logging.info(f"Run: {command}")
    os.system(command)


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_SRC:{RSVIM_SRC}")
    logging.info(f"GHPAGE_SRC:{GHPAGE_SRC}")
    logging.info(f"GHPAGE_DOC:{GHPAGE_DOC}")

    precheck()
    prepare_dirs()
    generate_typedoc()
    place_typedoc()
    postcheck()
