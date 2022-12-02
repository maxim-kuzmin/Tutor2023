// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts;

/// <summary>
/// Интерфейс Состояния.
/// </summary>
internal interface IState
{
    #region Methods

    /// <summary>
    /// Обработать запрос на перевод Контекста в первое состояние.
    /// </summary>
    /// <param name="context">Контекст.</param>
    void HandleTransferToFirstStateRequest(Context context);

    /// <summary>
    /// Обработать запрос на перевод Контекста во второе состояние
    /// </summary>
    /// <param name="context">Контекст.</param>
    void HandleTransferToSecondStateRequest(Context context);

    #endregion Methods
}
