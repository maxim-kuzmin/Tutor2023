// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts.Colleagues;

/// <summary>
/// Второй коллега.
/// </summary>
internal class SecondColleague : Colleague
{
    #region Constructors

    /// <inheritdoc/>
    public SecondColleague(IMediator mediator) : base(mediator)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Notify(string message)
    {
        Console.WriteLine($"Message for the Second Colleague: {message}");
    }

    #endregion Public methods
}
