// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Facade.Parts;

/// <summary>
/// Фасад.
/// </summary>
internal class Facade
{
    #region Fields

    private readonly FirstSubsystem _firstSubsystem;

    private readonly SecondSubsystem _secondSubsystem;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="firstSubsystem">Первая подсистема.</param>
    /// <param name="secondSubsystem">Вторая подсистема.</param>
    public Facade(FirstSubsystem firstSubsystem, SecondSubsystem secondSubsystem)
    {
        _firstSubsystem = firstSubsystem;
        _secondSubsystem = secondSubsystem;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Oперация.
    /// </summary>
    public void Operation()
    {
        Console.WriteLine($"{nameof(Facade)}.{nameof(Operation)}");

        _firstSubsystem.Operation1();
        _firstSubsystem.Operation2();

        _secondSubsystem.Operation1();
        _secondSubsystem.Operation2();
    }

    #endregion Public methods
}
