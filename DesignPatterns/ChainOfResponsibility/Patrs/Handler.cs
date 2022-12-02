// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace ChainOfResponsibility.Patrs;

/// <summary>
/// Обработчик.
/// </summary>
internal abstract class Handler
{
    #region Properties

    /// <summary>
    /// Преемник.
    /// </summary>
    protected Handler? Successor { get; init; }

    /// <summary>
    /// Признак того, что запрос обработан.
    /// </summary>
    public bool IsHandled { get; set; }

    #endregion Properties

    #region Constructors

    /// <summary>
    /// Запрос.
    /// </summary>
    /// <param name="successor">Преемник.</param>
    public Handler(Handler successor)
    {
        Successor = successor;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Обработать запрос.
    /// </summary>
    /// <param name="request">Запрос.</param>
    public void Handle(Request request)
    {
        if (ShouldBeHandled(request))
        {
            IsHandled = true;
        }
        else
        {
            Successor?.Handle(request);
        }
    }

    #endregion Public methods

    #region Protected methods

    /// <summary>
    /// Проверить, следует ли обрабатывать запрос.
    /// </summary>
    /// <param name="request">Запрос.</param>
    /// <returns>Признак необходимости обработки запроса.</returns>
    protected abstract bool ShouldBeHandled(Request request);

    #endregion Protected methods
}
