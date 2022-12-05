// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Proxy.Parts.Subjects;

/// <summary>
/// Настоящий субъект.
/// </summary>
internal class RealSubject : ISubject
{
    #region Public methods

    /// <inheritdoc/>
    public void Request()
    {
        Console.WriteLine($"{nameof(RealSubject)}.{nameof(Request)}");
    }

    #endregion Public methods
}
