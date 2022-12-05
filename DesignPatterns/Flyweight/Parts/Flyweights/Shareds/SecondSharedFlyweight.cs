// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts.Flyweights.Shareds;

/// <summary>
/// Второй разделяемый приспособленец.
/// </summary>
internal class SecondSharedFlyweight : SharedFlyweight
{
    #region Constructors

    /// <inheritdoc/>
    public SecondSharedFlyweight() : base("Second")
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation(string extrinsicState)
    {
        Console.WriteLine($"{nameof(SecondSharedFlyweight)}.{IntrinsicState}: {extrinsicState}");
    }

    #endregion Public methods
}
