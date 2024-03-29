﻿// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Observer.Parts.Observers;

/// <summary>
/// Второй наблюдатель.
/// </summary>
internal class SecondObserver : IObserver
{
    #region Public methods

    /// <inheritdoc/>
    public void Update()
    {
        Console.WriteLine($"{nameof(SecondObserver)}: updated");
    }

    #endregion Public methods
}
