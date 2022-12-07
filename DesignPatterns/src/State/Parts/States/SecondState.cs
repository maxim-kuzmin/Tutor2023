// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts.States;

/// <summary>
/// Второе состояние.
/// </summary>
internal class SecondState : IState
{
    #region Public methods

    /// <inheritdoc/>
    public void HandleTransferToFirstStateRequest(Context context)
    {
        context.State = new FirstState();
    }

    /// <inheritdoc/>
    public void HandleTransferToSecondStateRequest(Context context)
    {
    }

    #endregion Public methods
}
