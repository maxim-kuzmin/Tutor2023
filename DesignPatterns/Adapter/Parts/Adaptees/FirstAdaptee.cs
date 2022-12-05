// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Adapter.Parts.Adaptees;

/// <summary>
/// Первое адаптированное.
/// </summary>
internal class FirstAdaptee
{
    #region Methods

    /// <summary>
    /// Специфичный запрос.
    /// </summary>
    public void SpecificRequest()
    {
        Console.WriteLine($"{nameof(FirstAdaptee)}.{nameof(SpecificRequest)}");
    }

    #endregion Methods
}
