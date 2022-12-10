// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Prototype.Parts;

/// <summary>
/// Прототип.
/// </summary>
internal abstract class Prototype : IPrototype
{
    #region Properties

    /// <inheritdoc/>
    public PrototypeData Data { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="data">Данные.</param>
    public Prototype(PrototypeData data)
    {
        Data = data;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public abstract IPrototype Clone();

    #endregion Public methods
}
