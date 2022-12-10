// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts;

/// <summary>
/// Контекст.
/// </summary>
internal class Context
{
    #region Properties

    /// <summary>
    /// Состояние.
    /// </summary>
    public IState State { get; set; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="state">Состояние.</param>
    public Context(IState state)
    {
        State = state;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Запросить перевод в первое состояние.
    /// </summary>
    public void RequestTransferToFirstState()
    {
        State.HandleTransferToFirstState(this);
    }

    /// <summary>
    /// Запросить перевод во второе состояние.
    /// </summary>
    public void RequestTransferToSecondState()
    {
        State.HandleTransferToSecondState(this);
    }

    #endregion Public methods
}
