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
RSVIM_SRC_DIR = CWD.parent / "rsvim" / "runtime"
RSVIM_SRC = [RSVIM_SRC_DIR / f for f in ["00__web.ts", "01__rsvim.ts"]]


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_SRC_DIR:{RSVIM_SRC_DIR}")
    logging.info(f"RSVIM_SRC:{RSVIM_SRC}")
