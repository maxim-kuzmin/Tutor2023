// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Mediator.Parts;

/// <summary>
/// Коллега.
/// </summary>
internal abstract class Colleague : IColleague
{
    #region Properties

    private readonly IMediator _mediator;

    /// <summary>
    /// Уведомление.
    /// </summary>
    public string Notification { get; protected set; } = string.Empty;

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="mediator">Посредник.</param>
    public Colleague(IMediator mediator)
    {
        _mediator = mediator;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Отправить сообщение посреднику.
    /// </summary>
    /// <param name="message">Сообщение.</param>
    public void Send(string message)
    {
        _mediator.Send(message, this);
    }

    /// <inheritdoc/>
    public abstract void Notify(string notification);

    #endregion Public methods
}
