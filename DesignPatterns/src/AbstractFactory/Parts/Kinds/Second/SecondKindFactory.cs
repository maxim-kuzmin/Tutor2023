// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts.Kinds.Second;

/// <summary>
/// Фабрика второго типа.
/// </summary>
internal class SecondKindFactory : IFactory
{
    #region Public methods

    /// <inheritdoc/>
    public IFirstProduct CreateFirstProduct()
    {
        return new SecondKindFirstProduct();
    }

    /// <inheritdoc/>
    public ISecondProduct CreateSecondProduct()
    {
        return new SecondKindSecondProduct();
    }

    #endregion Public methods
}
