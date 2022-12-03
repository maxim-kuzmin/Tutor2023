// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts;

/// <summary>
/// Интерфейс Итератора.
/// </summary>
internal interface IIterator
{
    #region Properties

    /// <summary>
    /// Текущий элемент.
    /// </summary>
    object Current { get; }

    /// <summary>
    /// Признак окончания перебора элементов.
    /// </summary>
    bool IsDone { get; }

    #endregion Properties

    #region Methods

    /// <summary>
    /// Перейти к первому элементу.
    /// </summary>
    void First();

    /// <summary>
    /// Перейти к последнему элементу.
    /// </summary>
    void Next();

    #endregion Methods
}
