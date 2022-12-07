// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Observer.Parts;

/// <summary>
/// Интерфейс Наблюдаемого.
/// </summary>
internal interface IObservable
{
    #region Methods

    /// <summary>
    /// Добавить Наблюдателя.
    /// </summary>
    /// <param name="observer">Наблюдатель.</param>
    void AddObserver(IObserver observer);

    /// <summary>
    /// Уведомить Наблюдателей.
    /// </summary>
    void NotifyObservers();

    /// <summary>
    /// Удалить Наблюдателя.
    /// </summary>
    /// <param name="observer">Наблюдатель.</param>
    void RemoveObserver(IObserver observer);

    #endregion Methods
}
