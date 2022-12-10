// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Prototype.Parts
{
    /// <summary>
    /// Интерфейс Прототипа.
    /// </summary>
    internal interface IPrototype
    {
        #region Methods

        /// <summary>
        /// Клонировать.
        /// </summary>
        /// <returns>Клон.</returns>
        IPrototype Clone();

        #endregion Methods
    }
}
