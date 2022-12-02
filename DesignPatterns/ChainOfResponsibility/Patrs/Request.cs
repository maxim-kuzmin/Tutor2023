// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace ChainOfResponsibility.Patrs;

/// <summary>
/// Запрос.
/// </summary>
internal class Request
{
    #region Properties

    /// <summary>
    /// Данные.
    /// </summary>
    public string? Data { get; init; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="data">Данные.</param>
    public Request(string? data)
    {
        Data = data;
    }

    #endregion Constructors
}
