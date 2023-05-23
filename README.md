# wasm from scratch
WebAssembly from .Net can be fiddly. What is the simplest and cleanest way to have C# code in the browser? Some experiments with comments to remind me what is going on.

.csproj is worth reading - important stuff in there.

Recommended docs:
https://learn.microsoft.com/en-us/aspnet/core/client-side/dotnet-interop

## To Run

1. Run the following from command line:
dotnet publish --configuration Release

2. Navigate to the generated bin\Release\net7.0\browser-wasm\AppBundle

3. Open index.html (using server. Live Server VSCode plugin is easiest option here)

4. You should see messages in the Chrome console

## Linking to other web projects as a wrapper for a library

1. Copy all files from bin\Release\net7.0\browser-wasm\AppBundle\ into your project

2. Copy the code that calls the library from main.js into your web project
