// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts;

/// <summary>
/// Макрокоманда.
/// </summary>
internal class MacroCommand : ICommand
{
    #region Fields

    private readonly IEnumerable<ICommand> _commandsToExecute;

    private readonly IEnumerable<ICommand> _commandsToUndo;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="commands">Команды.</param>
    public MacroCommand(ICommand[] commands)
    {        
        _commandsToExecute = commands;

        var commandsToUndo = new List<ICommand>(commands.Length);

        for (int i = commands.Length - 1; i >= 0; i--)
        {
            commandsToUndo.Add(commands[i]);
        }

        _commandsToUndo = commandsToUndo;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public void Execute()
    {
        foreach (var command in _commandsToExecute)
        {
            command.Execute();
        }
    }

    /// <inheritdoc/>
    public void Undo()
    {
        foreach (var command in _commandsToUndo)
        {
            command.Undo();
        }
    }

    #endregion Public methods
}
