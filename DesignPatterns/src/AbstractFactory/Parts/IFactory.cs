// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts;

/// <summary>
/// Фабрика.
/// </summary>
internal interface IFactory
{
    #region Methods

    /// <summary>
    /// Создать Первый продукт.
    /// </summary>
    /// <returns>Первый продукт.</returns>
    IFirstProduct CreateFirstProduct();

    /// <summary>
    /// Создать Второй продукт.
    /// </summary>
    /// <returns>Второй продукт.</returns>
    ISecondProduct CreateSecondProduct();

    #endregion Methods
}
