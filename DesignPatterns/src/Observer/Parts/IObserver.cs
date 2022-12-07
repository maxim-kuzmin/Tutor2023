// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Observer.Parts;

/// <summary>
/// Интерфейс Наблюдателя.
/// </summary>
internal interface IObserver
{
    #region Methods

    /// <summary>
    /// Обновить.
    /// </summary>
    /// <param name="data">Данные.</param>
    void Update(string data);

    #endregion Methods
}
