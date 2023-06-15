// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

using System.Diagnostics;

namespace Sorting.Common
{
    public abstract class Algorithm<T> : IAlgorithm<T>
        where T : IComparable<T>
    {
        private readonly Stopwatch _timer = new();

        /// <inheritdoc/>
        public AlgorithmData Data { get; }

        public Algorithm(string name)
        {
            Data = new (name);
        }

        /// <inheritdoc/>
        public void Sort(T[] array)
        {
            Data.ResetOperationCount();

            Data.TimerTicks = 0;

            _timer.Restart();            

            DoSort(array);

            _timer.Stop();

            Data.TimerTicks = _timer.ElapsedTicks;
        }

        /// <summary>
        /// Обменять элементы массива.
        /// </summary>
        /// <param name="left">Левый элемент.</param>
        /// <param name="right">Правый элемент.</param>
        protected void Swap(ref T left, ref T right)
        {
            Data.IncrementOperationCount();
            
            (right, left) = (left, right);
        }

        protected int Compare(T left, T right)
        {
            Data.IncrementOperationCount();

            return left.CompareTo(right);
        }

        protected abstract void DoSort(T[] array);
    }
}
