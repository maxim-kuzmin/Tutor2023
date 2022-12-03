// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Iterator.Parts;

internal abstract class Iterator : IIterator
{
    #region Properties

    /// <summary>
    /// Агрегат.
    /// </summary>
    protected IAggregate Aggregate { get; init; }

    /// <summary>
    /// Текущий индекс.
    /// </summary>
    protected int CurrentIndex { get; set; }

    /// <inheritdoc/>
    public object Current => Aggregate.GetItemByIndex(CurrentIndex);

    /// <inheritdoc/>
    public abstract bool IsDone { get; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="aggregate">Агрегат.</param>
    public Iterator(IAggregate aggregate)
    {
        Aggregate = aggregate;

        First();
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public abstract void First();

    /// <inheritdoc/>
    public abstract void Next();

    #endregion Public methods
}
