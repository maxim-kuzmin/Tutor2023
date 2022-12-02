// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Accounts;

/// <summary>
/// Первый элемент.
/// </summary>
internal class FirstElement : IElement
{
    #region Properties

    /// <summary>
    /// Свойство 1.1.
    /// </summary>
    public string Prop11 { get; init; }

    /// <summary>
    /// Свойство 1.2.
    /// </summary>
    public string Prop12 { get; init; }

    #endregion Properties

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="prop11">Свойство 1.1.</param>
    /// <param name="prop12">Свойство 1.2.</param>
    public FirstElement(string prop11, string prop12)
    {
        Prop11 = prop11;
        Prop12 = prop12;
    }

    #region Public methods

    /// <inheritdoc/>
    public void Accept(IVisitor visitor)
    {
        visitor.VisitFirstElement(this);
    }

    #endregion Public methods
}
