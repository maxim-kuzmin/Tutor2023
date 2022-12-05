// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts.Abstractions;

/// <summary>
/// Вторая абстракция.
/// </summary>
internal class SecondAbstraction : Abstraction
{
    #region Constructors

    /// <inheritdoc/>
    public SecondAbstraction(IImplementor implementor) : base(implementor)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation()
    {
        Console.WriteLine($"{nameof(SecondAbstraction)}.{nameof(Operation)}");

        Implementor.Operation2();
        Implementor.Operation1();
    }

    #endregion Public methods
}
