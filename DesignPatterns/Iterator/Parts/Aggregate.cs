// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts;

/// <summary>
/// Агрегат.
/// </summary>
internal abstract class Aggregate : IAggregate
{
    #region Fields

    private readonly object[] _items;

    #endregion Fields

    #region Properties

    /// <inheritdoc/>
    public int Count => _items.Length;

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="items">Элементы.</param>
    public Aggregate(object[] items)
    {
        _items = items;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public abstract IIterator CreateIterator();

    /// <inheritdoc/>
    public object GetItemByIndex(int index)
    {
        return _items[index];
    }

    #endregion Public methods
}
