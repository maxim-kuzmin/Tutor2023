// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts.Abstractions;

/// <summary>
/// Первая абстракция.
/// </summary>
internal class FirstAbstraction : Abstraction
{
    #region Constructors

    /// <inheritdoc/>
    public FirstAbstraction(IImplementor implementor) : base(implementor)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation()
    {
        Console.WriteLine($"{nameof(FirstAbstraction)}.{nameof(Operation)}");

        Implementor.Operation1();
        Implementor.Operation2();
    }

    #endregion Public methods
}
