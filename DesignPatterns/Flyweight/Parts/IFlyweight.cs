// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts;

/// <summary>
/// Интерфейс Приспособленца.
/// </summary>
internal interface IFlyweight
{
    #region Methods

    /// <summary>
    /// Операция.
    /// </summary>
    /// <param name="extrinsicState">Внешнее состояние.</param>
    void Operation(string extrinsicState);

    #endregion Methods
}
