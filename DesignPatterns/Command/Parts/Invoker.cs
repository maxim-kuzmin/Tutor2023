// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts;

/// <summary>
/// Инициатор команды.
/// </summary>
internal class Invoker
{
    #region Fields

    private ICommand? _сommand;

    #endregion Fields

    #region Public methods

    /// <summary>
    /// Отменить.
    /// </summary>
    public void Cancel()
    {
        _сommand?.Undo();
    }

    /// <summary>
    /// Запустить.
    /// </summary>
    public void Run()
    {
        _сommand?.Execute();
    }

    /// <summary>
    /// Установить команду.
    /// </summary>
    /// <param name="command">Команда.</param>
    public void SetCommand(ICommand command)
    {
        _сommand = command;
    }

    #endregion Public methods
}
