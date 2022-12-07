// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts.Implementors;

/// <summary>
/// Первый исполнитель.
/// </summary>
internal class FirstImplementor : IImplementor
{
    #region Public methods

    /// <inheritdoc/>
    public void Operation1()
    {
        Console.WriteLine($"{nameof(FirstImplementor)}.{nameof(Operation1)}");
    }

    /// <inheritdoc/>
    public void Operation2()
    {
        Console.WriteLine($"{nameof(FirstImplementor)}.{nameof(Operation2)}");
    }

    #endregion Public methods
}
