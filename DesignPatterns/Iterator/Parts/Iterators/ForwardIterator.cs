// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Iterators;

/// <summary>
/// Прямой итератор.
/// </summary>
internal class ForwardIterator : Iterator
{
    #region Properties

    /// <inheritdoc/>
    public sealed override bool IsDone => CurrentIndex == Aggregate.Count - 1;

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="aggregate">Агрегат.</param>
    public ForwardIterator(IAggregate aggregate) : base(aggregate)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void First()
    {
        CurrentIndex = 0;
    }

    /// <inheritdoc/>
    public sealed override void Next()
    {
        if (CurrentIndex < Aggregate.Count)
        {
            CurrentIndex++;
        }
    }

    #endregion Public methods
}
