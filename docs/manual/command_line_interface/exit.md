---
sidebar_position: 2
---

# Exit

As Rsvim runs asynchronously just like a HTTP API service, it handles multiple tasks by tokio's async multi-threaded runtime. User's keyboard and mouse events are only one of the requests sending to it. When user executes `:js Rsvim.rt.exit();` command, it just sends a "Exit" request to ask Rsvim to exit.

Rsvim proceeds below steps in order:

## 1. Wait For Blocked Tasks Complete

All tasks inside Rsvim are split into two kinds:

1. Blocked tasks: Only a few critical tasks are blocked tasks, such as: write file. To ensure data safety, Rsvim waits for all the ongoing critical tasks to complete before actually exiting, however any new task requests will be rejected.
2. Detached tasks: Most other tasks are detached tasks, such as: open file, edit buffer, cursor motion, etc. They will be cancelled and discarded, since the results no longer matters.

## 2. Recover Terminal

Terminal goes back to normal mode, and exit the editor process.
