# ezrpc-build-example

This example shows you how you could set up your project with microservices, and make it ready for building with ezrpc.

It also shows you how to send class instances between microservices. Since data is transported as JSON classes are usually lost. In this example this is fixed by casting received object back to the class they were before (this is done in [src/remote/calculator.js](src/remote/calculator.js))

You can execute the `build` script to build this project. A `build` folder will appear at the root of the project. Make sure your node version supports fs.promises, as the build tool uses it (Node 13 seems to work)
