// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace GetStarted.PublishSubscribe.Common;

/// <summary>
/// Конфигурация.
/// </summary>
public class Config
{
    #region Properties

    /// <summary>
    /// Коммутатор.
    /// </summary>
    public string Exchange { get; } = "get_started__logs";

    #endregion Properties
}