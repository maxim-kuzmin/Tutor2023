﻿// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace Sorting.Common.Algorithms
{
    /// <summary>
    /// Алгоритм "Сортировка вставками".
    /// Сложность квадратичная: O(n^2),
    /// так как используются 2 вложенных цикла: внешний с (N - 1) 
    /// и внутренний с (N / 2) итерациями, включающими в себя по
    /// одной операции сравнения и в худшем случае
    /// (массив отсортировани в обратном порядке) одной операции
    /// обмена: (N - 1) * (N / 2) * (2) = (N - 1) * (N) = O(N^2).
    /// В лучшем случае (массив уже отсортирован) проводится всего одна
    /// операция сравнения во внутреннем цикле и не одной операции
    /// обмена, что даёт линейную сложность: (N) * (1) = N = O(N).
    /// Начиная со второго элемента каждый элемент массива последовательно
    /// сравнивается со всеми его предыдущими элементами.
    /// В случае, если текущий элемент элемент меньше предыдущего,
    /// они меняются местами.
    /// Таким образом наименьший элемент "вставляется" ближе к началу массива,
    /// формируя там упорядоченную часть.
    /// Именно таким образом упорядочивается колода карт - карты переставляются справа-налево.
    /// Алгоритм эффективен, когда элементов массива не много и
    /// когда массив уже частично отсортирован.
    /// Если же элементов меньше 10 то данный алгоритм является лучшим.
    /// </summary>
    /// <typeparam name="T">Тип сортируемого значения.</typeparam>
    public class InsertionAlghoritm<T> : Algorithm<T>
        where T : IComparable<T>
    {
        public InsertionAlghoritm()
            : base("Insertion")
        {
        }

        /// <inheritdoc/>
        protected sealed override void DoSort(T[] array)
        {
            // Проходим по массиву, начиная со второго элемента,
            // чтобы иметь возможность сравнить текущий элемент
            // с предыдущими.
            // iCur - индекс текущего элемента
            for (int iCur = 1; iCur < array.Length; iCur++)
            {
                // Проходим по массиву назад от текущего до второго элемента.
                // iPrev - индекс текущего элемента при движении в обратную сторону.
                for (int iCurBack = iCur; iCurBack > 0; iCurBack--)
                {
                    // Если текущий элемент при движении в обратную сторону меньше следующего за ним,
                    if (Compare(array[iCurBack], array[iCurBack - 1]) < 0)
                    {
                        // меняем их местами.
                        Swap(ref array[iCurBack], ref array[iCurBack - 1]);
                    }
                    else
                    {
                        // в противном случае прекращаем движение назад.
                        break;
                    }
                }
            }
        }
    }
}
