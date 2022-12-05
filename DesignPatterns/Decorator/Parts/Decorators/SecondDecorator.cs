// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Decorator.Parts.Decorators;

/// <summary>
/// Второй декоратор.
/// </summary>
internal class SecondDecorator : Decorator
{
    #region Constructors

    /// <inheritdoc/>
    public SecondDecorator(IComponent component) : base(component)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation()
    {
        base.Operation();

        Console.WriteLine(nameof(SecondDecorator));
    }

    #endregion Public methods
}
