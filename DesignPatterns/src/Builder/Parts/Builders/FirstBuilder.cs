// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts.Builders;

/// <summary>
/// Первый строитель.
/// </summary>
internal class FirstBuilder : Builder
{
    #region Public methods

    /// <inheritdoc/>
    public override void BuildFirstPart()
    {
        Result.FirstPart = $"{nameof(FirstBuilder)} - {nameof(BuildFirstPart)}";
    }

    /// <inheritdoc/>
    public override void BuildSecondPart()
    {
       Result.SecondPart = $"{nameof(FirstBuilder)} - {nameof(BuildSecondPart)}";
    }

    #endregion Public methods
}
