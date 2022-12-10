// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts;

/// <summary>
/// Продукт.
/// </summary>
internal class Product
{
    #region Properties

    /// <summary>
    /// Первая часть.
    /// </summary>
    public string FirstPart { get; set; } = null!;

    /// <summary>
    /// Вторая часть.
    /// </summary>
    public string SecondPart { get; set; } = null!;

    #endregion Properties

    #region Public methods

    /// <inheritdoc/>
    public sealed override string ToString()
    {
        return $$"""
            {
                "FirstPart": "{{FirstPart}}",
                "SecondPart": "{{SecondPart}}"
            }
            """;
    }

    #endregion Public methods
}
