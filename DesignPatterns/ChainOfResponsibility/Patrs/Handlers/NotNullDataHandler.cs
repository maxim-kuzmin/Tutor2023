// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace ChainOfResponsibility.Patrs.Handlers;

/// <summary>
/// Обработчик данных, содержащих ненулевое значение.
/// </summary>
internal class NotNullDataHandler : Handler
{
    #region Constructors

    /// <inheritdoc/>
    public NotNullDataHandler(Handler successor) : base(successor)
    {
    }

    #endregion Constructors

    #region Protected methods

    /// <inheritdoc/>
    protected override bool ShouldBeHandled(Request request) => request.Data is not null;

    #endregion Protected methods
}
