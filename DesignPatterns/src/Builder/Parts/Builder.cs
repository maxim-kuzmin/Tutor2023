// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts;

/// <summary>
/// Строитель.
/// </summary>
internal abstract class Builder : IBuilder
{
    #region Properties

    /// <inheritdoc/>
    public Product Result { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    public Builder()
    {
        Result = new Product();
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public abstract void BuildFirstPart();

    /// <inheritdoc/>
    public abstract void BuildSecondPart();

    #endregion Public methods
}
