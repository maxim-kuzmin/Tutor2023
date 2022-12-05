// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts.Implementors;

/// <summary>
/// Второй исполнитель.
/// </summary>
internal class SecondImplementor : IImplementor
{
    #region Public methods

    /// <inheritdoc/>
    public void Operation1()
    {
        Console.WriteLine($"{nameof(SecondImplementor)}.{nameof(Operation1)}");
    }

    /// <inheritdoc/>
    public void Operation2()
    {
        Console.WriteLine($"{nameof(SecondImplementor)}.{nameof(Operation2)}");
    }

    #endregion Public methods
}
