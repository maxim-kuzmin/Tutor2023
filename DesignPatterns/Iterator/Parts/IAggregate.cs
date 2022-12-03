// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts;

/// <summary>
/// Интерфейс Агрегата.
/// </summary>
internal interface IAggregate
{
    #region Properties

    /// <summary>
    /// Количество элементов.
    /// </summary>
    int Count { get; }

    #endregion Properties

    #region Methods

    /// <summary>
    /// Создать Итератор.
    /// </summary>
    /// <returns>Итератор.</returns>
    IIterator CreateIterator();

    /// <summary>
    /// Получить элемент по индексу.
    /// </summary>
    /// <param name="index">Индекс.</param>
    /// <returns>Элемент.</returns>
    object GetItemByIndex(int index);

    #endregion Methods
}
