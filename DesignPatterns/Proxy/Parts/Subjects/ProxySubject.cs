// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Proxy.Parts.Subjects;

/// <summary>
/// Замещающий субъект.
/// </summary>
internal class ProxySubject : ISubject
{
    #region Fields

    private ISubject? _realSubject;

    #endregion Fields

    #region Public methods

    /// <inheritdoc/>
    public void Request()
    {
        if (_realSubject is null)
        {
            _realSubject = new RealSubject();
        }

        _realSubject.Request();

        Console.WriteLine($"{nameof(ProxySubject)}.{nameof(Request)}");
    }

    #endregion Public methods
}
