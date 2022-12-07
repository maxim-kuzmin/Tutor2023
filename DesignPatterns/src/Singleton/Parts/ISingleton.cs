// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Singleton.Parts;

/// <summary>
/// Интерфейс Одиночки.
/// </summary>
internal interface ISingleton
{
    #region Properties

    /// <summary>
    /// Имя.
    /// </summary>
    string Name { get; }

    #endregion Properties
}
