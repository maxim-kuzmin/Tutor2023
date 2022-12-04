// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

ISingleton firstLazySingleton = LazySingleton.Instance;
ISingleton secondLazySingleton = LazySingleton.Instance;

Show(firstLazySingleton, secondLazySingleton);

ISingleton firstStaticSingleton = StaticSingleton.Instance;
ISingleton secondStaticSingleton = StaticSingleton.Instance;

Show(firstStaticSingleton, secondStaticSingleton);

static void Show(ISingleton firstSingleton, ISingleton secondSingleton)
{
    Console.WriteLine(firstSingleton.Name);
    Console.WriteLine(secondSingleton.Name);
    Console.WriteLine();
}
