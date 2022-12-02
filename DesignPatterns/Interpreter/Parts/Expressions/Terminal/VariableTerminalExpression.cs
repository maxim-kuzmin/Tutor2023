// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts.Expressions.Terminal;

/// <summary>
/// Терминальное выражение для получения значения переменной.
/// </summary>
internal class VariableTerminalExpression : IExpression
{
    #region Fields

    private readonly string _variableName;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="variableName">Имя переменной.</param>
    public VariableTerminalExpression(string variableName)
    {
        _variableName = variableName;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public int Interpret(Context context)
    {
        return context.GetVariableValueByName(_variableName);
    }

    #endregion Public methods
}
