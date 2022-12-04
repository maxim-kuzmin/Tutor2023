// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Observer.Parts;

internal class Observable : IObservable
{
    #region Fields

    private readonly List<IObserver> _observers = new List<IObserver>();

    #endregion Fields

    #region Properties

    /// <summary>
    /// Данные.
    /// </summary>
    public string Data { get; set; } = null!;

    #endregion Properties

    #region Public methods

    /// <inheritdoc/>
    public void AddObserver(IObserver observer)
    {
        _observers.Add(observer);
    }

    /// <inheritdoc/>
    public void NotifyObservers()
    {
        foreach (var observer in _observers)
        {
            observer.Update(Data);
        }
    }

    /// <inheritdoc/>
    public void RemoveObserver(IObserver observer)
    {
        _observers.Remove(observer);
    }

    #endregion Public methods
}
