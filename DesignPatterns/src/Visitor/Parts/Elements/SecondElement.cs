// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Accounts;

/// <summary>
/// Второй элемент.
/// </summary>
internal class SecondElement : IElement
{
    #region Public methods

    /// <inheritdoc/>
    public void Accept(IVisitor visitor)
    {
        visitor.VisitSecondElement(this);
    }

    #endregion Public methods
}

