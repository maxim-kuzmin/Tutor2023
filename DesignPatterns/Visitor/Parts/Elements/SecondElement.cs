// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Accounts;

/// <summary>
/// Второй элемент.
/// </summary>
internal class SecondElement : IElement
{
    #region Properties

    /// <summary>
    /// Свойство 2.1.
    /// </summary>
    public string Prop21 { get; init; }

    /// <summary>
    /// Свойство 2.2.
    /// </summary>
    public string Prop22 { get; init; }

    #endregion Properties

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="prop11">Свойство 2.1.</param>
    /// <param name="prop12">Свойство 2.2.</param>
    public SecondElement(string prop21, string prop22)
    {
        Prop21 = prop21;
        Prop22 = prop22;
    }

    #region Public methods

    /// <inheritdoc/>
    public void Accept(IVisitor visitor)
    {
        visitor.VisitSecondElement(this);
    }

    #endregion Public methods
}

