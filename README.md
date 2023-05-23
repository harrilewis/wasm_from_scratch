# wasm from scratch
.Net to WebAssembly is new for me. What is the simplest and cleanest way to have C# code in the browser? Some experiments with comments to remind me what is going on.

.csproj is worth reading - important stuff in there.

Recommended docs:
https://learn.microsoft.com/en-us/aspnet/core/client-side/dotnet-interop

## To Run

1. Install the `wasm-tools workload`, which brings in the related MSBuild targets.

`dotnet workload install wasm-tools`

2. Run the following from command line:

`dotnet publish --configuration Release`

3. Navigate to the generated bin\Release\net7.0\browser-wasm\AppBundle

4. Open index.html (using server. Live Server VSCode plugin is easiest option here)

5. You should see messages in the Chrome console

## Linking to other web projects as a wrapper for a library

1. Copy all files from bin\Release\net7.0\browser-wasm\AppBundle\ into your project

2. Copy the code that calls the library from main.js into your web project
