// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Memento.Parts;

/// <summary>
/// Хранитель.
/// </summary>
internal class Memento
{
    #region Properties

    /// <summary>
    /// Состояние.
    /// </summary>
    public string State { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="state">Состояние.</param>
    public Memento(string state)
    {
        State = state;
    }

    #endregion Constructors
}
