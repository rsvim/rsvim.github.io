#!/usr/bin/env python3

# Formatted with ruff.

import argparse
import logging
import os
import pathlib
import platform
import shutil
from pathlib import Path

CWD = Path(os.getcwd())
RSVIM_SRC = CWD.parent / "rsvim" / "runtime"
RSVIM_SRC_FILENAMES = ["00__web.ts", "01__rsvim.ts"]
RSVIM_SRC_FILES = [RSVIM_SRC / filename for filename in RSVIM_SRC_FILENAMES]
GHPAGE_SRC = CWD / "runtime"
GHPAGE_SRC_FILES = [GHPAGE_SRC / filename for filename in RSVIM_SRC_FILENAMES]
GHPAGE_DOC = CWD / "typedoc"
IMPORT_META_DOC = CWD / "docs" / "api" / "00__web" / "interfaces" / "ImportMeta.md"
IMPORT_META_DOC_SWAP = CWD / ".ImportMeta.md.swap"


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
        f"Temporarily save IMPORT_META_DOC ({IMPORT_META_DOC}) to IMPORT_META_DOC_SWAP ({IMPORT_META_DOC_SWAP})"
    )
    shutil.copytree(IMPORT_META_DOC, IMPORT_META_DOC_SWAP)


def generate_typedoc():
    command = "npm run typedoc"
    logging.info(f"Run: {command}")
    os.system(command)


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_SRC:{RSVIM_SRC}")
    logging.info(f"RSVIM_SRC_FILES:{RSVIM_SRC_FILES}")
    logging.info(f"GHPAGE_SRC:{GHPAGE_SRC}")
    logging.info(f"GHPAGE_SRC_FILES:{GHPAGE_SRC_FILES}")
    logging.info(f"GHPAGE_DOC:{GHPAGE_DOC}")
