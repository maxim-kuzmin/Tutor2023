// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts;

/// <summary>
/// Интерфейс Команды.
/// </summary>
internal interface ICommand
{
    #region Methods

    /// <summary>
    /// Выполнить.
    /// </summary>
    void Execute();

    /// <summary>
    /// Отменить.
    /// </summary>
    void Undo();

    #endregion Methods
}
