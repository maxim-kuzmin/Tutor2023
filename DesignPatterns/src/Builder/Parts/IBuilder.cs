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
    /// Шаг 1.
    /// </summary>
    void Step1();

    /// <summary>
    /// Шаг 2.
    /// </summary>
    void Step2();

    /// <summary>
    /// Шаг 3.
    /// </summary>
    void Step3();

    #endregion Methods
}
