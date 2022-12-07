// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Decorator.Parts.Decorators;

/// <summary>
/// Первый декоратор.
/// </summary>
internal class FirstDecorator : Decorator
{
    #region Constructors

    /// <inheritdoc/>
    public FirstDecorator(IComponent component) : base(component)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Operation()
    {
        base.Operation();

        Console.WriteLine(nameof(FirstDecorator));
    }

    #endregion Public methods
}
