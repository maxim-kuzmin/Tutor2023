// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts.States;

/// <summary>
/// Второе состояние.
/// </summary>
internal class SecondState : IState
{
    #region Public methods

    /// <inheritdoc/>
    public void HandleTransferToFirstState(Context context)
    {
        context.State = new FirstState();

        Console.WriteLine("State changed to first");
    }

    /// <inheritdoc/>
    public void HandleTransferToSecondState(Context context)
    {
    }

    #endregion Public methods
}
