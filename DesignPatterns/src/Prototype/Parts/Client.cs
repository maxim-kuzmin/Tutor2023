// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Prototype.Parts;

/// <summary>
/// Клиент.
/// </summary>
internal class Client
{
    #region Fields

    private readonly IPrototype _firstPrototype;

    private readonly IPrototype _secondPrototype;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="firstPrototype">Первый прототип.</param>
    /// <param name="secondPrototype">Второй прототип.</param>
    public Client(IPrototype firstPrototype, IPrototype secondPrototype)
    {
        _firstPrototype = firstPrototype;
        _secondPrototype = secondPrototype;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Операция.
    /// </summary>
    public void Operation()
    {
        Show("Originals:", _firstPrototype, _secondPrototype);

        IPrototype firstPrototypeClone = _firstPrototype.Clone();
        IPrototype secondPrototypeClone = _secondPrototype.Clone();
        
        Show("Clones:", firstPrototypeClone, secondPrototypeClone);
    }

    #endregion Public methods

    #region Private methods

    private static void Show(string title, IPrototype firstPrototype, IPrototype secondPrototype)
    {
        Console.WriteLine(title);

        Console.WriteLine(firstPrototype);
        Console.WriteLine(secondPrototype);

        Console.WriteLine();
    }

    #endregion Private methods
}
