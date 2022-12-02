// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts;

/// <summary>
/// Посетитель.
/// </summary>
internal abstract class Visitor : IVisitor
{
    #region Properies

    /// <summary>
    /// Действие для обработки результата посещения.
    /// </summary>
    protected Action<string> ActionToHandleVisitResult { get; init; }

    #endregion Properies

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="actionToHandleVisitResult">Действие для обработки результата посещения.</param>
    public Visitor(Action<string> actionToHandleVisitResult)
    {
        ActionToHandleVisitResult = actionToHandleVisitResult;
    }

    #region Public methods

    /// <inheritdoc/>
    public abstract void VisitFirstElement(FirstElement element);

    /// <inheritdoc/>
    public abstract void VisitSecondElement(SecondElement element);

    #endregion Public methods
}
