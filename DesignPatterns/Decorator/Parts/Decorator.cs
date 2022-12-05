// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Decorator.Parts;

internal class Decorator : IComponent
{
    #region Fields

    private IComponent? _component;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="component">Компонент.</param>
    public Decorator(IComponent? component)
    {
        SetComponent(component);
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public virtual void Operation()
    {
        if (_component is null)
        {
            Console.WriteLine(nameof(Decorator));
        }
        else
        {
            _component.Operation();
        }
    }

    public void SetComponent(IComponent? component)
    {
        _component = component;
    }

    #endregion Public methods
}
