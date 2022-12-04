// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Strategy.Strategies;

/// <summary>
/// Вторая стратегия.
/// </summary>
internal class SecondStrategy : IStrategy
{
    #region Public methods

    /// <inheritdoc/>
    public void Alghoritm()
    {
        Console.WriteLine(nameof(SecondStrategy));
    }

    #endregion Public methods
}
