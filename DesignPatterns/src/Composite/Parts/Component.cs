// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Composite.Parts;

/// <summary>
/// Компонент.
/// </summary>
internal abstract class Component
{
    #region Properties

    /// <summary>
    /// Имя.
    /// </summary>
    public string Name { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="name">Имя.</param>
    public Component(string name)
    {
        Name = name;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Добавить.
    /// </summary>
    /// <param name="component">Компонент.</param>
    public abstract void Add(Component component);

    /// <summary>
    /// Отобразить.
    /// </summary>
    public virtual void Display()
    {
        Console.WriteLine(Name);
    }

    /// <summary>
    /// Удалить.
    /// </summary>
    /// <param name="component">Компонент.</param>
    public abstract void Remove(Component component);

    #endregion Public methods
}
