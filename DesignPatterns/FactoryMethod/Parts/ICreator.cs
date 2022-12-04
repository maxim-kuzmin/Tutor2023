// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace FactoryMethod.Parts;

/// <summary>
/// Интерфейс Создателя.
/// </summary>
internal interface ICreator
{
    #region Methods

    /// <summary>
    /// Фабричный метод.
    /// </summary>
    /// <returns>Продукт.</returns>
    IProduct FactoryMethod();

    #endregion Methods
}
