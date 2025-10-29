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
RSVIM_DIR = CWD.parent / "rsvim"


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)
    logging.info(f"CWD:{CWD}")
    logging.info(f"RSVIM_DIR:{RSVIM_DIR}")
