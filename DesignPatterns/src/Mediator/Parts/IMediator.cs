// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts;

/// <summary>
/// Интерфейс Посредника.
/// </summary>
internal interface IMediator
{
    #region Methods

    /// <summary>
    /// Отправить.
    /// </summary>
    /// <param name="message">Сообщение.</param>
    /// <param name="colleague">Коллега.</param>
    void Send(string message, IColleague colleague);

    #endregion Methods
}
