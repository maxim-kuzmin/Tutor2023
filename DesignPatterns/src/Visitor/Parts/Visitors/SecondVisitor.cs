// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Visitors;

/// <summary>
/// Второй посетитель.
/// </summary>
internal class SecondVisitor : IVisitor
{
    #region Public methods

    /// <inheritdoc/>
    public void VisitFirstElement(FirstElement element)
    {
        Console.WriteLine($"{nameof(SecondVisitor)} - {nameof(FirstElement)}");
    }

    /// <inheritdoc/>
    public void VisitSecondElement(SecondElement element)
    {
        Console.WriteLine($"{nameof(SecondVisitor)} - {nameof(SecondElement)}");
    }

    #endregion Public methods
}