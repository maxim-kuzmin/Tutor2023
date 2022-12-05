// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts.Flyweights;

/// <summary>
/// Pазделяемый приспособленец.
/// </summary>
internal class SharedFlyweight : IFlyweight
{
    #region Properties

    /// <summary>
    /// Внутреннее состояние.
    /// </summary>
    public string IntrinsicState { get; private set; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="intrinsicState">Внутреннее состояние.</param>
    public SharedFlyweight(string intrinsicState)
    {
        IntrinsicState = intrinsicState;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public virtual void Operation(string extrinsicState)
    {
        Console.WriteLine($"{nameof(SharedFlyweight)}.{IntrinsicState}: {extrinsicState}");
    }

    #endregion Public methods
}
