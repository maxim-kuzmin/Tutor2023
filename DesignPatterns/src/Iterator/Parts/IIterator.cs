// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts;

/// <summary>
/// Интерфейс Итератора.
/// </summary>
internal interface IIterator
{
    #region Methods

    /// <summary>
    /// Получить текущий элемент.
    /// </summary>
    object Current();

    /// <summary>
    /// Получить первый элемент.
    /// </summary>
    object First();

    /// <summary>
    /// Получить признак окончания перебора элементов.
    /// </summary>
    /// <returns>Признак окончания перебора элементов..</returns>
    bool IsDone();

    /// <summary>
    /// Получить следующий элемент.
    /// </summary>
    /// <returns>Элемент.</returns>
    object Next();

    #endregion Methods
}
