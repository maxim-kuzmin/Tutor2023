// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts;

internal abstract class Command : ICommand
{
    #region Properties

    /// <summary>
    /// Получатель.
    /// </summary>
    protected Receiver Receiver { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="receiver">Получатель.</param>
    public Command(Receiver receiver)
    {
        Receiver = receiver;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public abstract void Execute();

    /// <inheritdoc/>
    public abstract void Undo();

    #endregion Public methods
}
