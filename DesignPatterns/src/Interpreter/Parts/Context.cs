// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts;

/// <summary>
/// Контекст для добавления и получения значений, используемых в выражениях.
/// </summary>
internal class Context
{
    #region Fields

    private readonly Dictionary<string, int> _valueLookup = new();

    #endregion Fields

    #region Public methods

    /// <summary>
    /// Добавить значение.
    /// </summary>
    /// <param name="name">Имя.</param>
    /// <param name="value">Значение.</param>
    public void AddValue(string name, int value)
    {
        _valueLookup[name] = value;
    }

    /// <summary>
    /// Получить значение.
    /// </summary>
    /// <param name="name">Имя.</param>
    /// <returns>Значение.</returns>
    public int GetValue(string name)
    {
        return _valueLookup[name];
    }

    #endregion Public methods
}
