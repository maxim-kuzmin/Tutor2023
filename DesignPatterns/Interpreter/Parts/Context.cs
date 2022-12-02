// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts;

/// <summary>
/// Контекст для добавления значений переменных и получения значений переменных по их имени.
/// </summary>
internal class Context
{
    #region Fields

    private readonly Dictionary<string, int> _variableValueLookup = new();

    #endregion Fields

    #region Public methods

    /// <summary>
    /// Добавить значение переменной.
    /// </summary>
    /// <param name="name">Имя переменной.</param>
    /// <param name="value">Значение переменной.</param>
    public void AddVariableValue(string name, int value)
    {
        _variableValueLookup[name] = value;
    }

    /// <summary>
    /// Получить значение переменной по её имени.
    /// </summary>
    /// <param name="name">Имя переменной.</param>
    /// <returns>Значение переменной.</returns>
    public int GetVariableValueByName(string name)
    {
        return _variableValueLookup[name];
    }

    #endregion Public methods
}
