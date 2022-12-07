// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Adapter.Parts.Adaptees;

/// <summary>
/// Второе адаптированное.
/// </summary>
internal class SecondAdaptee
{
    #region Methods

    /// <summary>
    /// Специфичный запрос.
    /// </summary>
    public void SpecificRequest()
    {
        Console.WriteLine($"{nameof(SecondAdaptee)}.{nameof(SpecificRequest)}");
    }

    #endregion Methods
}
