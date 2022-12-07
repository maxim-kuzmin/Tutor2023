// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Decorator.Parts.Components;

/// <summary>
/// Первый компонент.
/// </summary>
internal class FirstComponent : IComponent
{
    #region Public methods

    /// <inheritdoc/>
    public void Operation()
    {
        Console.WriteLine(nameof(FirstComponent));
    }

    #endregion Public methods
}
