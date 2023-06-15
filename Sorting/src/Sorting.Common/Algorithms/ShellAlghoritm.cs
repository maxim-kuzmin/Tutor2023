// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Sorting.Common.Algorithms
{
    /// <summary>
    /// Алгоритм "Сортировка Шелла".
    /// Сложность квадратичная: O(N^2),
    /// так как используются 2 вложенных цикла: внешний с (N - 1) 
    /// и внутренний с (N / 2) итерациями, включающими в себя по
    /// одной операции сравнения и в худшем случае одной операции
    /// обмена: (N - 1) * (N / 2) * (2) = (N - 1) * (N) = O(N^2).
    /// Алгоритм сортировки выбором состоит из следующих шагов:
    /// - Для начала определяем позицию минимального элемента массива;
    /// - Делаем обмен минимального элемента с элементом в начале массива.
    ///   Получается, что первый элемент массива уже отсортирован;
    /// - Уменьшаем рабочую область массива, отбрасывая первый элемент,
    ///   а для подмассива который получился, повторяем сортировку.
    /// Таким образом, упорядоченная часть массива формируется в его начале.
    /// Алгоритм эффективен, когда когда элементов массива не много.
    /// </summary>
    /// <typeparam name="T">Тип сортируемого значения.</typeparam>
    public class ShellAlghoritm<T> : Algorithm<T>
        where T : IComparable<T>
    {
        public ShellAlghoritm()
            : base("Shell")
        {
        }

        /// <inheritdoc/>
        protected sealed override void DoSort(T[] array)
        {
            for (int step = array.Length / 2; step > 0; step /= 2)
            {
                for (int iCur = step; iCur < array.Length; iCur++)
                {
                    for (int iCurBack = iCur; iCurBack >= step; iCurBack -= step)
                    {
                        if (Compare(array[iCurBack], array[iCurBack - step]) < 0)
                        {
                            Swap(ref array[iCurBack], ref array[iCurBack - step]);
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }
        }
    }
}
