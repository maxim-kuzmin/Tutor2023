// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Decorator.Parts.Components;

/// <summary>
/// Второй компонент.
/// </summary>
internal class SecondComponent : IComponent
{
    #region Public methods

    /// <inheritdoc/>
    public void Operation()
    {
        Console.WriteLine(nameof(SecondComponent));
    }

    #endregion Public methods
}
