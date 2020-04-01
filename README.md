# ezrpc-build-example

This example shows you how you can set up your code to be compatible with the `build` command. As you can see in the code `add.js` and `index.js` have `/* ezrpc-name */` comments to indicate that they are entrypoints

You can execute the `build` script to build this project. A `build` folder will appear at the root of the project. Make sure your node version supports fs.promises, as the CLI uses it (Node 13 seems to work)
