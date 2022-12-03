// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Aggregates;

/// <summary>
/// Обратный агрегат.
/// </summary>
internal class ReverseAggregate : Aggregate
{
    #region Constructors

    /// <inheritdoc/>
    public ReverseAggregate(object[] items) : base(items)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override IIterator CreateIterator()
    {
        return new ReverseIterator(this);
    }

    #endregion Public methods
}
