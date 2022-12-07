// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace FactoryMethod.Parts.Creators;

/// <summary>
/// Первый создатель.
/// </summary>
internal class FirstCreator : ICreator
{
    #region Public methods

    /// <inheritdoc/>
    public IProduct FactoryMethod()
    {
        return new FirstProduct();
    }

    #endregion Public methods
}
