// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Singleton.Parts.Singletons;

/// <summary>
/// Ленивый одиночка.
/// </summary>
internal class LazySingleton : ISingleton
{
    #region Fields

    private static readonly Lazy<ISingleton> _instance = new(() => new LazySingleton());

    #endregion Fields

    #region Properties

    /// <summary>
    /// Экземпляр.
    /// </summary>
    public static ISingleton Instance => _instance.Value;

    /// <inheritdoc/>
    public string Name { get; init; }

    #endregion Properties

    #region Constructors

    private LazySingleton()
    {
        Name = $"{nameof(LazySingleton)}: {Guid.NewGuid()}";
    }

    #endregion Constructors
}
