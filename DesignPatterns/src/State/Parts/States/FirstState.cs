// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts.States;

/// <summary>
/// Первое состояние.
/// </summary>
internal class FirstState : IState
{
    #region Public methods

    /// <inheritdoc/>
    public void HandleTransferToFirstState(Context context)
    {        
    }

    /// <inheritdoc/>
    public void HandleTransferToSecondState(Context context)
    {
        context.State = new SecondState();

        Console.WriteLine("State changed to second");
    }

    #endregion Public methods
}
