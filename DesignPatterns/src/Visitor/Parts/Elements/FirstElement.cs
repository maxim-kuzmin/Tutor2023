// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Accounts;

/// <summary>
/// Первый элемент.
/// </summary>
internal class FirstElement : IElement
{
    #region Public methods

    /// <inheritdoc/>
    public void Accept(IVisitor visitor)
    {
        visitor.VisitFirstElement(this);
    }

    #endregion Public methods
}
