// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Observer.Parts.Observers;

/// <summary>
/// Первый наблюдатель.
/// </summary>
internal class FirstObserver : IObserver
{
    #region Public methods

    /// <inheritdoc/>
    public void Update(string data)
    {
        Console.WriteLine($"{nameof(FirstObserver)}: {data}");
    }

    #endregion Public methods
}
