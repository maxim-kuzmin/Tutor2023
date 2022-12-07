// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts.Kinds.First;

/// <summary>
/// Фабрика первого типа.
/// </summary>
internal class FirstKindFactory : IFactory
{
    #region Public methods

    /// <inheritdoc/>
    public IFirstProduct CreateFirstProduct()
    {
        return new FirstKindFirstProduct();
    }

    /// <inheritdoc/>
    public ISecondProduct CreateSecondProduct()
    {
        return new FirstKindSecondProduct();
    }

    #endregion Public methods
}
