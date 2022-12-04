// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Builder.Parts.Builders;

/// <summary>
/// Первый строитель.
/// </summary>
internal class FirstBuilder : Builder
{
    #region Public methods

    /// <inheritdoc/>
    public override void Step1()
    {
        Result.Prop1 = $"{nameof(FirstBuilder)}.{nameof(Product.Prop1)}";
    }

    /// <inheritdoc/>
    public override void Step2()
    {
        Result.Prop2 = $"{nameof(FirstBuilder)}.{nameof(Product.Prop2)}";
    }

    /// <inheritdoc/>
    public override void Step3()
    {
        Result.Prop3 = $"{nameof(FirstBuilder)}.{nameof(Product.Prop3)}";
    }

    #endregion Public methods
}
