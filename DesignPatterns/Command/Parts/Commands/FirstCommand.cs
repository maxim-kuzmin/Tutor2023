// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts.Commands;

/// <summary>
/// Первая команда.
/// </summary>
internal class FirstCommand : Command
{
    #region Constructors

    /// <inheritdoc/>
    public FirstCommand(Receiver receiver) : base(receiver)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Execute()
    {
        Receiver.ExecuteFirstOperation();
    }

    /// <inheritdoc/>
    public sealed override void Undo()
    {
        Receiver.UndoFirstOperation();
    }

    #endregion Public methods
}
