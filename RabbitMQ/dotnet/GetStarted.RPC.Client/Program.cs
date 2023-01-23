// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

var globalConfig = new GlobalConfig();
var localConfig = new LocalConfig();

Console.WriteLine("RPC Client");

string n = args.Length > 0 ? args[0] : "30";

await InvokeAsync(n, globalConfig, localConfig);

Console.WriteLine(" Press [enter] to exit.");

Console.ReadLine();

static async Task InvokeAsync(string n, GlobalConfig globalConfig, LocalConfig localConfig)
{
    using var procedure = new Procedure(globalConfig, localConfig);

    Console.WriteLine(" [x] Requesting fib({0})", n);

    string response = await procedure.CallAsync(n.ToString());
    
    Console.WriteLine(" [.] Got '{0}'", response);
}
     