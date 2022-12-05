// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts.Flyweights.Shareds;

/// <summary>
/// Первый разделяемый приспособленец.
/// </summary>
internal class FirstSharedFlyweight : SharedFlyweight
{
    #region Constructors

    /// <inheritdoc/>
    public FirstSharedFlyweight() : base("First")
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation(string extrinsicState)
    {
        Console.WriteLine($"{nameof(FirstSharedFlyweight)}.{IntrinsicState}: {extrinsicState}");
    }

    #endregion Public methods
}
