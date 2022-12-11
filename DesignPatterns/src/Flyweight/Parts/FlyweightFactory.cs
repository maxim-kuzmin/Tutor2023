// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Flyweight.Parts;

/// <summary>
/// Фабрика приспособленцев.
/// </summary>
internal class FlyweightFactory
{
    #region Fields

    private readonly Dictionary<string, SharedFlyweight> _flyweightLookup = new();

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    public FlyweightFactory()
    {
        SharedFlyweight firstSharedFlyweight = new FirstSharedFlyweight();
        SharedFlyweight secondSharedFlyweight = new SecondSharedFlyweight();

        _flyweightLookup[firstSharedFlyweight.IntrinsicState] = firstSharedFlyweight;
        _flyweightLookup[secondSharedFlyweight.IntrinsicState] = secondSharedFlyweight;
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Получить Приспособленца.
    /// </summary>
    /// <param name="key">Ключ.</param>
    /// <returns>Приспособленец.</returns>
    public IFlyweight GetFlyweight(string key)
    {
        if (!_flyweightLookup.TryGetValue(key, out var result))
        {
            result = new SharedFlyweight(key);

            _flyweightLookup[key] = result;

            Console.WriteLine($"{result.IntrinsicState} created");
        }

        return result;
    }

    #endregion Public methods
}
