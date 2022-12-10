// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Visitors;

/// <summary>
/// Первый посетитель.
/// </summary>
internal class FirstVisitor : IVisitor
{
    #region Public methods

    /// <inheritdoc/>
    public void VisitFirstElement(FirstElement element)
    {
        Console.WriteLine($"{nameof(FirstVisitor)} - {nameof(FirstElement)}");
    }

    /// <inheritdoc/>
    public void VisitSecondElement(SecondElement element)
    {
        Console.WriteLine($"{nameof(FirstVisitor)} - {nameof(SecondElement)}");
    }

    #endregion Public methods
}
