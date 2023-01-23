// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace GetStarted.WorkQueues.Common;

/// <summary>
/// Конфигурация.
/// </summary>
public class Config
{
    #region Properties

    /// <summary>
    /// Очередь.
    /// </summary>
    public string Queue { get; } = "get_started__task_queue";

    #endregion Properties
}