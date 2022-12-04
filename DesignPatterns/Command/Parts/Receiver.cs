// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Command.Parts;

/// <summary>
/// Получатель.
/// </summary>
internal class Receiver
{
    #region Public methods

    /// <summary>
    /// Выполнить первую операцию.
    /// </summary>
    public void ExecuteFirstOperation()
    {
        Console.WriteLine(nameof(ExecuteFirstOperation));
    }

    /// <summary>
    /// Выполнить вторую операцию.
    /// </summary>
    public void ExecuteSecondOperation()
    {
        Console.WriteLine(nameof(ExecuteSecondOperation));
    }

    /// <summary>
    /// Отменить первую операцию.
    /// </summary>
    public void UndoFirstOperation()
    {
        Console.WriteLine(nameof(UndoFirstOperation));
    }

    /// <summary>
    /// Отменит вторую операцию.
    /// </summary>
    public void UndoSecondOperation()
    {
        Console.WriteLine(nameof(UndoSecondOperation));
    }

    #endregion Public methods    
}
