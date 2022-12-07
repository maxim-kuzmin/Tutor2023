// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts.Expressions;

/// <summary>
/// Терминальное выражение.
/// </summary>
internal class TerminalExpression : IExpression
{
    #region Fields

    private readonly string _name;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="name">Имя.</param>
    public TerminalExpression(string name)
    {
        _name = name;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public int Interpret(Context context)
    {
        return context.GetValue(_name);
    }

    #endregion Public methods
}
