import { dotnet } from "./dotnet.js";

//check we are in a browser
const is_browser = typeof window != "undefined";
if (!is_browser) throw new Error(`Expected to be running in a browser`);

//destructuring - the function returns an object with some functions and we assign straight away.
const { setModuleImports, getAssemblyExports, getConfig } =
  await dotnet.create();

//setModuleImports associates a name with a module of JS functions for import into .NET
//probably don't need this
//allows us to add "[JSImport("window.location.href", "main.js")]" above a C# method signature. Then that method will call the JS
// setModuleImports("main.js", {
//   window: {
//     location: {
//       href: () => globalThis.window.location.href,
//     },
//   },
// });

//this is retrieving data from the generated mono-config.json?
const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

//this calls into .NET (CSharpWrapper.Greeting) from JS
const text = exports.CSharpWrapper.Greeting();
console.log(text);

//this runs Program.Main()
//don't need this. Unless we want to start off our C# app (rather than just using as a library)
dotnet.run()
