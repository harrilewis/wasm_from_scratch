using System.Runtime.InteropServices.JavaScript;

//needs to be set a partial. This is because the [JSExport] attribute instructs the Source Generator to generate the interop code for the methods.
public partial class CSharpWrapper
{
    //a main functon is required. Is it possible to build as a library and then not require this?
    //dotnet.run() will call this!
    static void Main()
    {
        System.Console.WriteLine("dotnet.run() was just called!");
    }

    [JSExport]
    public static string Greeting()
    {
        var text = "hello from C#";
        System.Console.WriteLine(text);
        return text;
    }
}