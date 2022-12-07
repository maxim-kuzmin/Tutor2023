// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts;

/// <summary>
/// Структура объектов, которая хранит элементы и предоставляет возможность принимать посетителей,
/// выполняющих операции над каждым из этих элементов.
/// </summary>
internal class ObjectStructure
{
    #region Fields

    private readonly List<IElement> _elements = new();

    #endregion Fields

    #region Public methods

    /// <summary>
    /// Добавить элемент.
    /// </summary>
    /// <param name="element">Элемент.</param>
    public void AddElement(IElement element)
    {
        _elements.Add(element);
    }

    /// <summary>
    /// Принять посетителя.
    /// </summary>
    /// <param name="visitor">Посетитель.</param>
    public void Accept(IVisitor visitor)
    {
        foreach (var element in _elements)
        {
            element.Accept(visitor);
        }
    }

    #endregion Public methods
}
