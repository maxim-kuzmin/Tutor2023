// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace TemplateMethod.Parts;

/// <summary>
/// Абстрактный класс.
/// </summary>
internal abstract class AbstractClass
{
    #region Public methods

    /// <summary>
    /// Шаблонный метод.
    /// </summary>
    public void TemplateMethod()
    {
        FirstOperation();
        SecondOperation();
    }

    #endregion Public methods

    #region Protected methods

    /// <summary>
    /// Первая операция.
    /// </summary>
    protected abstract void FirstOperation();

    /// <summary>
    /// Вторая операция.
    /// </summary>
    protected abstract void SecondOperation();

    #endregion Protected methods
}
