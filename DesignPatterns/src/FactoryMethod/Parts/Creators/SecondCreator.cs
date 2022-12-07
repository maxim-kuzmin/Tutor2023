// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace FactoryMethod.Parts.Creators;

/// <summary>
/// Второй создатель.
/// </summary>
internal class SecondCreator : ICreator
{
    #region Public methods

    /// <inheritdoc/>
    public IProduct FactoryMethod()
    {
        return new SecondProduct();
    }

    #endregion Public methods
}
