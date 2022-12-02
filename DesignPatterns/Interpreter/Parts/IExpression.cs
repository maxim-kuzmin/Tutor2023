// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Interpreter.Parts;

/// <summary>
/// Интерфейс выражения.
/// </summary>
internal interface IExpression
{
    #region Methods

    /// <summary>
    /// Интерпретировать, то есть вычислить выражение с использованием контекста,
    /// в котором хранятся все необходимые данные для его вычисления.
    /// </summary>
    /// <param name="context">Контекст.</param>
    /// <returns>Результат вычисления выражения.</returns>
    int Interpret(Context context);

    #endregion Methods
}
