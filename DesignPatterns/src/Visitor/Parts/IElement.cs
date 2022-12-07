// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts;

/// <summary>
/// Интерфейс Элемента.
/// </summary>
internal interface IElement
{
    #region Methods

    /// <summary>
    /// Принять посетителя.
    /// </summary>
    /// <param name="visitor">Посетитель.</param>
    void Accept(IVisitor visitor);

    #endregion Methods
}
