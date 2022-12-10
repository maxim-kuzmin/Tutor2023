// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Prototype.Parts.Prototypes;

/// <summary>
/// Первый прототип.
/// </summary>
internal class FirstPrototype : Prototype
{
    #region Constructors

    /// <inheritdoc/>
    public FirstPrototype(PrototypeData data) : base(data)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override IPrototype Clone()
    {
        var data = new PrototypeData
        {
            Prop1 = Data.Prop1,
            Prop2 = Data.Prop2,
        };

        return new FirstPrototype(data);
    }

    /// <inheritdoc/>
    public sealed override string ToString()
    {
        return $"{nameof(FirstPrototype)}: {Data.Prop1}, {Data.Prop2}";
    }

    #endregion Public methods
}
