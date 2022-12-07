// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts;

/// <summary>
/// Распорядитель.
/// </summary>
internal class Director
{
    #region Fields

    private readonly IBuilder _builder;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="builder">Строитель.</param>
    public Director(IBuilder builder)
    {
        _builder = builder;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Построить.
    /// </summary>
    public void Construct()
    {
        _builder.Step1();
        _builder.Step2();
        _builder.Step3();
    }

    #endregion Public methods
}
