# SWC Minification Bug Showcase

This repository showcases a minification bug in `@swc/core` version 1.4.1 and 1.4.2-nightly-20240216.1. The bug does not appear in `@swc/core` version 1.4.0. The package used as an example is `@google/model-viewer` (version 3.4.0).

## Reproduction Steps

To reproduce the bug, follow these steps:

1. Clone this repository.
2. Install dependencies by running `yarn`.
3. Run the `index.mjs` file using Node.js: `node index.mjs` (tested with Node 18).
4. Start a web server in this directory, for example using Python 3: `python3 -m http.server`.
5. Open a web browser (tested in Firefox and Chrome) and navigate to the server's address.
6. Observe the Null Pointer Exception (NPE) in the browser.

## Bug Details

The minification bug occurs when using `@swc/core` version 1.4.1 or  1.4.2-nightly-20240216.1 with the `@google/model-viewer` package. It leads to a Null Pointer Exception (NPE) in the browser. This bug is not present in `@swc/core` version 1.4.0.

## Workaround

As a temporary workaround, you can use `@swc/core` version 1.4.0 instead of  1.4.2-nightly-20240216.1 to avoid the minification bug.