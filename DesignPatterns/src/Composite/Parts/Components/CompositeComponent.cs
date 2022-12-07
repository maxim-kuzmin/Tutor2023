// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Composite.Parts.Components;

/// <summary>
/// Составной компонент.
/// </summary>
internal class CompositeComponent : Component
{
    #region Fields

    private readonly List<Component> _children = new List<Component>();

    #endregion Fields

    #region Constructors

    /// <inheritdoc/>
    public CompositeComponent(string name) : base(name)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public override void Add(Component component)
    {
        _children.Add(component);
    }

    /// <inheritdoc/>
    public sealed override void Display()
    {
        base.Display();

        foreach (var child in _children)
        {
            child.Display();
        }
    }

    /// <inheritdoc/>
    public override void Remove(Component component)
    {
        _children.Remove(component);
    }

    #endregion Public methods
}
