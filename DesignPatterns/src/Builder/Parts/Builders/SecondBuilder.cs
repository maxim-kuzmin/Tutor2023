// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts.Builders;

/// <summary>
/// Второй строитель.
/// </summary>
internal class SecondBuilder : Builder
{
    #region Public methods

    /// <inheritdoc/>
    public override void BuildFirstPart()
    {
        Result.FirstPart = $"{nameof(SecondBuilder)} - {nameof(BuildFirstPart)}";
    }

    /// <inheritdoc/>
    public override void BuildSecondPart()
    {
        Result.SecondPart = $"{nameof(SecondBuilder)} - {nameof(BuildSecondPart)}";
    }

    #endregion Public methods
}
