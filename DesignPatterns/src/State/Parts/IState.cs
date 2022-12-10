// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace State.Parts;

/// <summary>
/// Интерфейс Состояния.
/// </summary>
internal interface IState
{
    #region Methods

    /// <summary>
    /// Обработать перевод в первое состояние.
    /// </summary>
    /// <param name="context">Контекст.</param>
    void HandleTransferToFirstState(Context context);

    /// <summary>
    /// Обработать перевод во второе состояние
    /// </summary>
    /// <param name="context">Контекст.</param>
    void HandleTransferToSecondState(Context context);

    #endregion Methods
}
