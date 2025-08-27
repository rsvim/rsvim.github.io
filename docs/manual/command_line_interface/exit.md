---
sidebar_position: 3
---

# Exit

As Rsvim runs asynchronously just like a HTTP API service, it handles multiple tasks by tokio's async/multithreaded runtime. User's keyboard/mouse event is only one of the requests sending to it. When user executes [`:js Rsvim.rt.exit();`](/docs/next/api/rsvim/classes/RsvimRt#exit) command, it actually only sends a "Exit" request to ask Rsvim to exit.

Rsvim proceeds below steps in order:

## Wait for Blocked Tasks

All tasks inside Rsvim are split into two kinds:

1. Blocked Tasks: Only a few critical tasks are blocked tasks, such as: write file. To ensure file system data safety, Rsvim waits for all the ongoing critical tasks to complete before actually exiting, however any new task requests will be rejected.
2. Detached Tasks: Most other tasks are detached tasks, such as: open file, edit buffer, cursor motion, etc. They will be cancelled and discarded, since the results are no longer important.

## Recover Terminal

Terminal goes back to normal mode, and exit the editor process.
