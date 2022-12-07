// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Composite.Parts.Components;

/// <summary>
/// Листовой компонент.
/// </summary>
internal class LeafComponent : Component
{
    #region Constructors

    /// <inheritdoc/>
    public LeafComponent(string name) : base(name)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public override void Add(Component component)
    {
    }

    /// <inheritdoc/>
    public override void Remove(Component component)
    {
    }

    #endregion Public methods
}
