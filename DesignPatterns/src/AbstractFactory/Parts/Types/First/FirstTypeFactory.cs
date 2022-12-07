// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts.Types.First;

/// <summary>
/// Фабрика первого типа.
/// </summary>
internal class FirstTypeFactory : IFactory
{
    #region Public methods

    /// <inheritdoc/>
    public IFirstProduct CreateFirstProduct()
    {
        return new FirstTypeFirstProduct();
    }

    /// <inheritdoc/>
    public ISecondProduct CreateSecondProduct()
    {
        return new FirstTypeSecondProduct();
    }

    #endregion Public methods
}
