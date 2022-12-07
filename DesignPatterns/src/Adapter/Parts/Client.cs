// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Adapter.Parts;

/// <summary>
/// Клиент.
/// </summary>
internal class Client
{
    #region Public methods

    /// <summary>
    /// Запросить.
    /// </summary>
    /// <param name="target">Цель.</param>
    public void Request(ITarget target)
    {
        target.Request();
    }

    #endregion Public methods
}
