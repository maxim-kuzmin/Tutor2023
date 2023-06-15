IAlgorithm<int>[] intAlgorithms = new IAlgorithm<int>[]
{
    new BubbleAlghoritm<int>(),
    new InsertionAlghoritm<int>(),
    new SelectionAlghoritm<int>(),
    new ShellAlghoritm<int>(),
};

//// Use only the second core 
//Process.GetCurrentProcess().ProcessorAffinity = new IntPtr(2); 

//// Prevents "Normal" processes from interrupting Threads
//Process.GetCurrentProcess().PriorityClass =  ProcessPriorityClass.High;

//// Prevents "Normal" Threads from interrupting this thread 
//Thread.CurrentThread.Priority = ThreadPriority.Highest;

//// Timer warm-up

//var timer = new Stopwatch();

//timer.Start();
//while (timer.ElapsedMilliseconds < 1200)
//{
//    SortIntArray(ArrayType.RandomSorted, intAlgorithms[0], false);
//}
//timer.Stop();

// Test

foreach (var algorithm in intAlgorithms)
{
    SortIntArray(ArrayType.Sorted, algorithm);    
    SortIntArray(ArrayType.RandomSorted, algorithm);
    SortIntArray(ArrayType.ReverseSorted, algorithm);

    Console.WriteLine();
}

static int[] CreateIntArray(ArrayType arrayType)
{
    int minValue = 1;
    int count = 10;

    var query = Enumerable.Range(minValue, count);

    switch (arrayType)
    {        
        case ArrayType.ReverseSorted: 
            query = query.OrderByDescending(x => x);
            break;
        case ArrayType.RandomSorted:
            var rnd = new Random();            
            query = query.OrderBy(x => rnd.Next(minValue, count - 1));
            break;
   }

    return query.ToArray();
}

static void Show<T>(ArrayType arrayType, AlgorithmData data, T[] array, T[] initialArray)
{
    string input = string.Join(",", initialArray);

    string output = string.Join(",", array);
    
    string result = array.Length > 10 ? "" : $":    [{input}] -> [{output}]";

    //Console.WriteLine($"{data.Name} :    {arrayType} :    {data.OperationCount} ops :   {data.TimerTicks} ticks    {result}");
    Console.WriteLine($"{data.Name} :    {arrayType} :    {data.OperationCount} {result}");
}

static void SortIntArray(ArrayType arrayType, IAlgorithm<int> algorithm, bool shouldBeShown = true)
{
    int[] array = CreateIntArray(arrayType);

    int[] initialArray = array.ToArray();

    algorithm.Sort(array);

    if (shouldBeShown)
    {
        Show(arrayType, algorithm.Data, array, initialArray);
    }
}
