// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

using Adapter.Parts.Adaptees;

namespace Adapter.Parts.Adapters;

/// <summary>
/// Второй адаптер.
/// </summary>
internal class SecondAdapter : ITarget
{
    #region Fields

    private readonly SecondAdaptee _adaptee;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="adaptee">Адаптированное.</param>
    public SecondAdapter(SecondAdaptee adaptee)
    {
        _adaptee = adaptee;
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public void Request()
    {
        _adaptee.SpecificRequest();
    }

    #endregion Public methods
}
