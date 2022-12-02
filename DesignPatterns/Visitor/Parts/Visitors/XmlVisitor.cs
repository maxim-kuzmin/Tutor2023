// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Visitors;

/// <summary>
/// Посетитель для получения представления элементов в формате XML.
/// </summary>
internal class XmlVisitor : Visitor
{
    #region Constructors

    /// <inheritdoc/>
    public XmlVisitor(Action<string> actionToHandleResult)
        : base(actionToHandleResult)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void VisitFirstElement(FirstElement element)
    {
        ActionToHandleVisitResult.Invoke($$"""
            <props>
                <prop name="{{nameof(element.Prop11)}}>{{element.Prop11}}</prop>
                <prop name="{{nameof(element.Prop12)}}>{{element.Prop12}}</prop>
            </props>
            """);
    }

    /// <inheritdoc/>
    public sealed override void VisitSecondElement(SecondElement element)
    {
        ActionToHandleVisitResult.Invoke($$"""
            <props>
                <prop name="{{nameof(element.Prop21)}}>{{element.Prop21}}</prop>
                <prop name="{{nameof(element.Prop22)}}>{{element.Prop22}}</prop>
            </props>
            """);
    }

    #endregion Public methods
}
