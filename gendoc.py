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


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_SRC:{RSVIM_SRC}")
    logging.info(f"RSVIM_SRC_FILES:{RSVIM_SRC_FILES}")
    logging.info(f"GHPAGE_SRC:{GHPAGE_SRC}")
    logging.info(f"GHPAGE_SRC_FILES:{GHPAGE_SRC_FILES}")
    logging.info(f"GHPAGE_DOC:{GHPAGE_DOC}")
