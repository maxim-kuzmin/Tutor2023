// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts.Flyweights;

/// <summary>
/// Неразделяемый приспособленец.
/// </summary>
internal class UnsharedFlyweight : IFlyweight
{
    #region Properties

    /// <summary>
    /// Всё состояние.
    /// </summary>
    public string? AllState { get; private set; }

    #endregion Properties

    #region Public methods

    /// <inheritdoc/>
    public void Operation(string extrinsicState)
    {
        AllState = extrinsicState;

        Console.WriteLine($"{nameof(UnsharedFlyweight)}.{AllState}");
    }

    #endregion Public methods
}
