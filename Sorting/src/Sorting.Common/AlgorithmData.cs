namespace Sorting.Common
{
    public class AlgorithmData
    {
        /// <summary>
        /// Имя алгоритма.
        /// </summary>
        public string Name { get; }

        /// <summary>
        /// Количество операций.
        /// </summary>
        public int OperationCount { get; private set; }

        /// <summary>
        /// Тики таймера.
        /// </summary>
        public long TimerTicks { get; set; }

        public AlgorithmData(string name)
        {
            Name = name;
        }

        public void IncrementOperationCount()
        {
            OperationCount++;
        }

        public void ResetOperationCount()
        {
            OperationCount = 0;
        }
    }
}
