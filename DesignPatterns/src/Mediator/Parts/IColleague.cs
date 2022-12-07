// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts;

/// <summary>
/// Интерфейс Коллеги.
/// </summary>
internal interface IColleague
{
    #region Methods

    /// <summary>
    /// Уведомить.
    /// </summary>
    /// <param name="notification">Уведомление.</param>
    void Notify(string notification);

    #endregion Methods
}
