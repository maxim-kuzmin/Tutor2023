// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts.Commands;

/// <summary>
/// Вторая команда.
/// </summary>
internal class SecondCommand : Command
{
    #region Constructors

    /// <inheritdoc/>
    public SecondCommand(Receiver receiver) : base(receiver)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Execute()
    {
        Receiver.ExecuteSecondOperation();
    }

    /// <inheritdoc/>
    public sealed override void Undo()
    {
        Receiver.UndoSecondOperation();
    }

    #endregion Public methods
}
