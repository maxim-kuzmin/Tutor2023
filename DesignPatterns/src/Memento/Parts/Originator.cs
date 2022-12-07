// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Memento.Parts;

/// <summary>
/// Инициатор.
/// </summary>
internal class Originator
{
    #region Fields

    private string _state = string.Empty;

    #endregion Fields

    #region Public methods

    /// <summary>
    /// Изменить состояние.
    /// </summary>
    public void ChangeState()
    {
        _state = Guid.NewGuid().ToString();
    }

    /// <summary>
    /// Создать хранителя.
    /// </summary>
    /// <returns>Хранитель.</returns>
    public Memento CreateMemento()
    {
        return new Memento(_state);
    }

    /// <summary>
    /// Установить хранителя.
    /// </summary>
    /// <param name="memento">Хранитель.</param>
    public void SetMemento(Memento memento)
    {
        _state = memento.State;
    }

    #endregion Public methods
}
