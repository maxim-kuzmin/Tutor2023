// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts.Aggregates;

/// <summary>
/// Прямой агрегат.
/// </summary>
internal class ForwardAggregate : Aggregate
{
    #region Constructors

    /// <inheritdoc/>
    public ForwardAggregate(object[] items) : base(items)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override IIterator CreateIterator()
    {
        return new ForwardIterator(this);
    }

    #endregion Public methods
}
