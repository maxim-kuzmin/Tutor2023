// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts;

/// <summary>
/// Посредник.
/// </summary>
internal class Mediator : IMediator
{
    #region Properties

    public IColleague? FirstColleague { get; set; }

    public IColleague? SecondColleague { get; set; }

    #endregion Properties

    #region Public methods

    /// <inheritdoc/>
    public void Send(string message, IColleague colleague)
    {
        if (colleague == FirstColleague)
        {
            SecondColleague?.Notify($"The Notification from the First Collegue to the Second Collegue: {message}");
        }
        else
        {
            FirstColleague?.Notify($"The Notification from the Second Collegue to the First Collegue: {message}");
        }
    }

    #endregion Public methods
}
