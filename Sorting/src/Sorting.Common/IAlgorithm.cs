// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Sorting.Common
{
    /// <summary>
    /// Интерфейс алгоритма сортировки.
    /// </summary>
    /// <typeparam name="T">Тип сортируемых элементов.</typeparam>
    public interface IAlgorithm<T>
        where T : IComparable<T>
    {
        /// <summary>
        /// Данные.
        /// </summary>
        AlgorithmData Data { get; }

        /// <summary>
        /// Сортировать массив элементов.
        /// </summary>
        /// <param name="array">Сортируемый массив.</param>
        void Sort(T[] array);
    }
}