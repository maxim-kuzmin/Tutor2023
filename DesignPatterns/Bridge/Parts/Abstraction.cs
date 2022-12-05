// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Bridge.Parts;

/// <summary>
/// Абстракция.
/// </summary>
internal abstract class Abstraction
{
    #region Properties

    /// <summary>
    /// Исполнитель.
    /// </summary>
    public IImplementor Implementor { get; set; }

    #endregion Properties

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="implementor">Исполнитель.</param>
    public Abstraction(IImplementor implementor)
    {
        Implementor = implementor;
    }

    #region Public methods

    /// <summary>
    /// Операция.
    /// </summary>
    public abstract void Operation();

    #endregion Public methods
}
