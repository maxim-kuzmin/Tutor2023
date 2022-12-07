// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Iterators;

/// <summary>
/// Прямой итератор.
/// </summary>
internal class ForwardIterator : Iterator
{
    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="aggregate">Агрегат.</param>
    public ForwardIterator(IAggregate aggregate) : base(aggregate)
    {
        CurrentIndex = 0;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override object First()
    {
        return Aggregate.GetItemByIndex(0);
    }

    /// <inheritdoc/>
    public sealed override bool IsDone() => CurrentIndex == Aggregate.Count - 1;

    /// <inheritdoc/>
    public sealed override object Next()
    {
        return Aggregate.GetItemByIndex(++CurrentIndex);
    }

    #endregion Public methods
}
