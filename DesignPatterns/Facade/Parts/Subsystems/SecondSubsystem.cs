// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Facade.Parts.Subsystems;

/// <summary>
/// Вторая подсистема.
/// </summary>
internal class SecondSubsystem
{
    #region Public methods

    /// <summary>
    /// Oперация 1.
    /// </summary>
    public void Operation1()
    {
        Console.WriteLine($"{nameof(SecondSubsystem)}.{nameof(Operation1)}");
    }

    /// <summary>
    /// Oперация 2.
    /// </summary>
    public void Operation2()
    {
        Console.WriteLine($"{nameof(SecondSubsystem)}.{nameof(Operation2)}");
    }

    #endregion Public methods
}
