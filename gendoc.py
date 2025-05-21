#!/usr/bin/env python3

# Formatted with black/isort.

import argparse
import logging
import os
import pathlib
import platform
import shutil
import subprocess

WINDOWS = platform.system().startswith("Windows") or platform.system().startswith(
    "CYGWIN_NT"
)
MACOS = platform.system().startswith("Darwin")


def remove_dir(p):
    if p.exists():
        try:
            shutil.rmtree(p)
        except Exception as e:
            logging.error(f"Failed to remove dir: {p}, error: {e}")


def api(name):
    cwd_path = pathlib.Path.cwd()
    rsvim_path = cwd_path / ".." / "rsvim"
    tmp_jsruntime_dir = cwd_path / ".jsruntime"
    tmp_generated_dir = cwd_path / ".generated"

    logging.info(
        f"Cwd: {cwd_path}, rsvim: {rsvim_path}, tmp jsruntime dir: {tmp_jsruntime_dir}, tmp generated dir: {tmp_generated_dir}"
    )

    rsvim_jsruntime_source_path = rsvim_path / "rsvim_core" / "src" / "js" / "runtime"

    if not rsvim_path.exists():
        logging.error(f"The `rsvim` git repo not found! exit...")
        return
    if not rsvim_jsruntime_source_path.exists():
        logging.error(f"The `rsvim` javascript runtime source code not found! exit...")
        return

    # clean old
    remove_dir(tmp_jsruntime_dir)
    remove_dir(tmp_generated_dir)

    logging.info(
        f"Copy jsruntime typescripts from ({rsvim_jsruntime_source_path}) to ({tmp_jsruntime_dir})"
    )
    shutil.copytree(rsvim_jsruntime_source_path, tmp_jsruntime_dir)

    command = "npm run typedoc"
    logging.info(command)
    os.system(command)

    api_docs_dir = cwd_path / "docs" / "api"

    gen_doc_path = tmp_generated_dir / name
    api_doc_path = api_docs_dir / name
    logging.info(f"Copy generated docs from ({gen_doc_path}) to ({api_doc_path})")
    shutil.copytree(tmp_generated_dir, api_doc_path)

    # clean up
    remove_dir(tmp_jsruntime_dir)
    remove_dir(tmp_generated_dir)


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s: %(message)s", level=logging.INFO)

    parser = argparse.ArgumentParser(description="help auto-generate API documents")

    subparsers = parser.add_subparsers(dest="subcommand")

    api_subparser = subparsers.add_parser(
        "api",
        aliases=["a"],
        help="Generate javascript API references",
    )

    parser = parser.parse_args()
    # print(parser)

    if parser.subcommand == "api" or parser.subcommand == "a":
        api(parser.watch)
    else:
        logging.error("Missing arguments, use -h/--help for more details.")
