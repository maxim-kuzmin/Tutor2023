// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts;

/// <summary>
/// Интерфейс Посетителя.
/// </summary>
internal interface IVisitor
{
    #region Methods

    /// <summary>
    /// Посетить первый элемент.
    /// </summary>
    /// <param name="element">Элемент.</param>
    void VisitFirstElement(FirstElement element);

    /// <summary>
    /// Посетить второй элемент.
    /// </summary>
    /// <param name="element">Элемент.</param>
    void VisitSecondElement(SecondElement element);

    #endregion Methods
}
