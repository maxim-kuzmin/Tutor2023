// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace TemplateMethod.Parts;

/// <summary>
/// Конкретный класс.
/// </summary>
internal class ConcreteClass : AbstractClass
{
    #region Protected methods

    /// <inheritdoc/>
    protected override void FirstOperation()
    {
        Console.WriteLine(nameof(FirstOperation));
    }

    /// <inheritdoc/>
    protected override void SecondOperation()
    {
        Console.WriteLine(nameof(SecondOperation));
    }

    #endregion Protected methods
}
