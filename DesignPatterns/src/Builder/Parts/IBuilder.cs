// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts;

/// <summary>
/// Интерфейс строителя.
/// </summary>
internal interface IBuilder
{
    #region Properties

    /// <summary>
    /// Результат.
    /// </summary>
    Product Result { get; }

    #endregion Properties

    #region Methods

    /// <summary>
    /// Построить первую часть.
    /// </summary>
    void BuildFirstPart();

    /// <summary>
    /// Построить вторую часть.
    /// </summary>
    void BuildSecondPart();

    #endregion Methods
}
