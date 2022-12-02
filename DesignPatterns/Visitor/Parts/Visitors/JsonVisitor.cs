// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Visitor.Parts.Visitors;

/// <summary>
/// Посетитель для получения представления элементов в формате JSON.
/// </summary>
internal class JsonVisitor : Visitor
{
    #region Constructors

    /// <inheritdoc/>
    public JsonVisitor(Action<string> actionToHandleResult)
        : base(actionToHandleResult)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void VisitFirstElement(FirstElement element)
    {
        ActionToHandleVisitResult.Invoke($$"""
            {
                "{{nameof(element.Prop11)}}": "{{element.Prop11}}",
                "{{nameof(element.Prop12)}}": "{{element.Prop12}}"
            }
            """);
    }

    /// <inheritdoc/>
    public sealed override void VisitSecondElement(SecondElement element)
    {
        ActionToHandleVisitResult.Invoke($$"""
            {
                "{{nameof(element.Prop21)}}": "{{element.Prop21}}",
                "{{nameof(element.Prop22)}}": "{{element.Prop22}}"
            }
            """);
    }

    #endregion Public methods
}
