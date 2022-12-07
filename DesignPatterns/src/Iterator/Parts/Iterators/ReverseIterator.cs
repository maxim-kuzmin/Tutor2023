// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Iterators;

/// <summary>
/// Обратный итератор.
/// </summary>
internal class ReverseIterator : Iterator
{
    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="aggregate">Агрегат.</param>
    public ReverseIterator(IAggregate aggregate) : base(aggregate)
    {
        CurrentIndex = Aggregate.Count - 1;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override object First()
    {
        return Aggregate.GetItemByIndex(Aggregate.Count - 1);
    }

    /// <inheritdoc/>
    public sealed override bool IsDone() => CurrentIndex == 0;

    /// <inheritdoc/>
    public sealed override object Next()
    {
        return Aggregate.GetItemByIndex(--CurrentIndex);
    }

    #endregion Public methods
}
