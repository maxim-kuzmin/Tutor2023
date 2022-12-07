// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts.Expressions.NonTerminal;

/// <summary>
/// Нетерминальное выражение для выполнения арифметической операции "+".
/// </summary>
internal class PlusOperationNonTerminalExpression : IExpression
{
    #region Fields

    private readonly IExpression _leftOperandExpression;

    private readonly IExpression _rightOperandExpression;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="leftOperandExpression">Выражение для получения левого операнда.</param>
    /// <param name="rightOperandExpression">Выражение для получения правого операнда.</param>
    public PlusOperationNonTerminalExpression(IExpression leftOperandExpression, IExpression rightOperandExpression)
    {
        _leftOperandExpression = leftOperandExpression;
        _rightOperandExpression = rightOperandExpression;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public int Interpret(Context context)
    {
        return _leftOperandExpression.Interpret(context) + _rightOperandExpression.Interpret(context);
    }

    #endregion Public methods
}
