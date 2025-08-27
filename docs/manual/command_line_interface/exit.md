---
sidebar_position: 3
---

# Exit

As Rsvim runs asynchronously just like a HTTP API service, it handles multiple tasks by tokio's async/multithreaded runtime. User's keyboard/mouse event is only one of all the requests sending to it.

When user executes [`:js Rsvim.rt.exit();`](/docs/api/rsvim/classes/RsvimRt#exit) command, it actually only sends a "Exit" request to ask Rsvim to exit.

At exiting, Rsvim proceeds below steps in order:

## Discard All Internal Pending Async Tasks
