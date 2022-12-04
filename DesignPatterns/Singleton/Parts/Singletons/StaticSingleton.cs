// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Singleton.Parts.Singletons;

/// <summary>
/// Статический одиночка.
/// </summary>
internal class StaticSingleton : ISingleton
{
    private class Nested
    {
        #region Fields

        internal static readonly ISingleton Instance = new StaticSingleton();

        #endregion Fields

        #region Constructors

        /// <summary>
        /// Статический конструктор.
        /// 
        /// Нужен для более предсказуемого момента создания экземпляра класса StaticSingleton.
        /// 
        /// Дело в том, что если класс содержит статические поля, но не содержит статического конструктора,
        /// то время инициализации статических полей зависит от реализации платформы.
        /// Нередко это непосредственно перед первым использованием, но тем не менее момент точно
        /// не определен - это может быть происходить и чуть раньше.
        /// 
        /// И наоборот, в случае, если класс содержит статический конструктор, то статические поля
        /// будут инициализироваться непосредственно либо при создании первого экземпляра класса,
        /// либо при первом обращении к статическим членам класса.
        /// 
        /// Благодаря наличию статического конструктора класса Nested экземпляр класса StaticSingleton
        /// создаётся строго в момент обращения к его статическому свойству Instance, а через него -
        /// к статическому свойству Instance класса Nested.
        /// </summary>
        static Nested()
        {
        }

        #endregion Constructors
    }

    #region Properties

    /// <summary>
    /// Экземпляр.
    /// </summary>
    public static ISingleton Instance => Nested.Instance;

    /// <inheritdoc/>
    public string Name { get; init; }

    #endregion Properties

    #region Constructors

    private StaticSingleton()
    {
        Name = $"{nameof(StaticSingleton)}: {Guid.NewGuid()}";
    }

    #endregion Constructors
}
