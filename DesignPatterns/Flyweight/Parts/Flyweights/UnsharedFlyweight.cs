// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts.Flyweights;

/// <summary>
/// Неразделяемый приспособленец.
/// </summary>
internal class UnsharedFlyweight : IFlyweight
{
    #region Fields

    private string? _allState;

    #endregion Fields

    #region Public methods

    /// <inheritdoc/>
    public void Operation(string extrinsicState)
    {
        _allState = extrinsicState;

        Console.WriteLine($"{nameof(UnsharedFlyweight)}.{_allState}");
    }

    #endregion Public methods
}
