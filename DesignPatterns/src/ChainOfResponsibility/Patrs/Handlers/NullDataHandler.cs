// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace ChainOfResponsibility.Patrs.Handlers;

/// <summary>
/// Обработчик данных, содержащих нулевое значение.
/// </summary>
internal class NullDataHandler : Handler
{
    #region Constructors

    /// <inheritdoc/>
    public NullDataHandler(Handler? successor) : base(successor)
    {
    }

    #endregion Constructors

    #region Protected methods

    /// <inheritdoc/>
    protected override bool ShouldBeHandled(Request request) => request.Data is null;

    #endregion Protected methods
}
