// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts;

/// <summary>
/// Интерфейс Абстракции.
/// </summary>
internal interface IAbstraction
{
    #region Properties

    /// <summary>
    /// Исполнитель.
    /// </summary>
    IImplementor Implementor { get; set; }

    #endregion Properties

    #region Methods

    /// <summary>
    /// Операция.
    /// </summary>
    void Operation();

    #endregion Mthods
}
