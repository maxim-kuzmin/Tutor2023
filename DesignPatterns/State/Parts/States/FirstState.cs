// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts.States;

/// <summary>
/// Первое состояние.
/// </summary>
internal class FirstState : IState
{
    #region Public methods

    /// <inheritdoc/>
    public void HandleTransferToFirstStateRequest(Context context)
    {        
    }

    /// <inheritdoc/>
    public void HandleTransferToSecondStateRequest(Context context)
    {
        context.State = new SecondState();
    }

    #endregion Public methods
}
