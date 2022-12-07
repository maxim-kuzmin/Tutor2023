// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Strategy.Strategies;

/// <summary>
/// Первая стратегия.
/// </summary>
internal class FirstStrategy : IStrategy
{
    #region Public methods

    /// <inheritdoc/>
    public void Alghoritm()
    {
        Console.WriteLine(nameof(FirstStrategy));
    }

    #endregion Public methods
}
