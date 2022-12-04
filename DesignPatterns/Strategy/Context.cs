// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Strategy;

/// <summary>
/// Контекст.
/// </summary>
internal class Context
{
    #region Properties

    /// <summary>
    /// Стратегия.
    /// </summary>
    public IStrategy Strategy { get; set; } = null!;

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="strategy">Стратегия.</param>
    public Context(IStrategy strategy)
    {
        Strategy = strategy;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Выполнить алгоритм.
    /// </summary>
    public void ExecuteAlghoritm()
    {
        Strategy.Alghoritm();
    }

    #endregion Public methods
}
