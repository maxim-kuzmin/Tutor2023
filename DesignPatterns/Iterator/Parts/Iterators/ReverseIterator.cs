// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Iterators;

/// <summary>
/// Обратный итератор.
/// </summary>
internal class ReverseIterator : Iterator
{
    #region Properties

    /// <inheritdoc/>
    public sealed override bool IsDone => CurrentIndex == 0;

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="aggregate">Агрегат.</param>
    public ReverseIterator(IAggregate aggregate) : base(aggregate)
    {        
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void First()
    {
        CurrentIndex = Aggregate.Count - 1;
    }

    /// <inheritdoc/>
    public sealed override void Next()
    {
        if (CurrentIndex > 0)
        {
            CurrentIndex--;
        }
    }

    #endregion Public methods
}
