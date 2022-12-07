// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts.Colleagues;

/// <summary>
/// Первый коллега.
/// </summary>
internal class FirstColleague : Colleague
{
    #region Constructors

    /// <inheritdoc/>
    public FirstColleague(IMediator mediator) : base(mediator)
    {
    }

    #endregion Constructors

    #region Public methods

    /// <inheritdoc/>
    public sealed override void Notify(string message)
    {
        Console.WriteLine($"Message for the First Colleague: {message}");
    }

    #endregion Public methods
}
