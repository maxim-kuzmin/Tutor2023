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
    /// Принять.
    /// </summary>
    /// <param name="visitor">Посетитель.</param>
    public void Accept(IVisitor visitor)
    {
        foreach (var element in _elements)
        {
            element.Accept(visitor);
        }
    }

    /// <summary>
    /// Добавить.
    /// </summary>
    /// <param name="element">Элемент.</param>
    public void Add(IElement element)
    {
        _elements.Add(element);
    }

    /// <summary>
    /// Удалить.
    /// </summary>
    /// <param name="element">Элемент.</param>
    public void Remove(IElement element)
    {
        _elements.Remove(element);
    }

    #endregion Public methods
}
