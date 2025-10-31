#!/usr/bin/env python3

# Formatted with ruff.

import logging
import os
from pathlib import Path

CWD = Path(os.getcwd())
RSVIM_SRC = CWD.parent / "rsvim" / "runtime"
GHPAGE_SRC = CWD / "runtime"
GHPAGE_DOC = CWD / "typedoc"
IMPORT_META_DOC = CWD / "docs" / "api" / "00__web" / "classes" / "ImportMeta.md"
IMPORT_META_DOC_SWAP = CWD / ".ImportMeta.md"
GHPAGE_API = CWD / "docs" / "api"


def precheck():
    if not RSVIM_SRC.exists():
        logging.error(f"RSVIM_SRC ({RSVIM_SRC}) doesn't exist, exit...")
        exit(1)


def prepare_dirs():
    for to_be_removed in [GHPAGE_SRC, GHPAGE_DOC, IMPORT_META_DOC_SWAP]:
        command = f"rm -rf {to_be_removed}"
        logging.info(command)
        os.system(command)
    for to_be_copied in [
        (RSVIM_SRC, GHPAGE_SRC),
        (IMPORT_META_DOC, IMPORT_META_DOC_SWAP),
    ]:
        command = f"cp -rf {to_be_copied[0]} {to_be_copied[1]}"
        logging.info(command)
        os.system(command)


def generate_typedoc():
    command = "npm run typedoc"
    logging.info(command)
    os.system(command)


def place_typedoc():
    for dirname in ["00__web", "01__rsvim"]:
        gen_doc = GHPAGE_DOC / dirname
        api_doc = GHPAGE_API / dirname
        command = f"rm -rf {api_doc}"
        logging.info(command)
        os.system(command)
        command = f"cp -rf {gen_doc} {api_doc}"
        logging.info(command)
        os.system(command)

    command = f"cp {IMPORT_META_DOC_SWAP} {IMPORT_META_DOC}"
    logging.info(command)
    os.system(command)


def postcheck():
    command = "git status"
    logging.info(command)
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
