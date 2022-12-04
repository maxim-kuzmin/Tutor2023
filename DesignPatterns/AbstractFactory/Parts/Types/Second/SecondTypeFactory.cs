// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts.Types.Second;

/// <summary>
/// Фабрика второго типа.
/// </summary>
internal class SecondTypeFactory : IFactory
{
    #region Public methods

    /// <inheritdoc/>
    public IFirstProduct CreateFirstProduct()
    {
        return new SecondTypeFirstProduct();
    }

    /// <inheritdoc/>
    public ISecondProduct CreateSecondProduct()
    {
        return new SecondTypeSecondProduct();
    }

    #endregion Public methods
}
