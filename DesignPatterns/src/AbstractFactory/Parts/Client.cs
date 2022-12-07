// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace AbstractFactory.Parts;

/// <summary>
/// Клиент.
/// </summary>
internal class Client
{
    #region Fields

    private readonly IFirstProduct _firstProduct;

    private readonly ISecondProduct _secondProduct;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="factory">Фабрика.</param>
    public Client(IFactory factory)
    {
        _firstProduct = factory.CreateFirstProduct();
        _secondProduct = factory.CreateSecondProduct();
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Запустить.
    /// </summary>
    public void Run()
    {
        Console.WriteLine(_firstProduct);
        Console.WriteLine(_secondProduct);
    }

    #endregion Public methods
}
