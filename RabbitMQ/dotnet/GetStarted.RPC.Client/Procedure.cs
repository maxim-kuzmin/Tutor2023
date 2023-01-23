// Copyright (c) 2023 Maxim Kuzmin. All rights reserved. Licensed under the MIT License.

namespace GetStarted.RPC.Client;

public class Procedure : IDisposable
{
    #region Fields

    private readonly string _queue;
    private readonly IConnection _connection;
    private readonly IModel _channel;
    private readonly string _replyQueue;
    private readonly EventingBasicConsumer _consumer;
    private readonly ConcurrentDictionary<string, TaskCompletionSource<string>> _callbackMapper = new();
    private bool _disposed;

    #endregion Fields

    #region Constructors

    /// <summary>
    /// Конструктор.
    /// </summary>
    /// <param name="globalConfig">Глобальная конфигурация.</param>
    /// <param name="localConfig">Локальная конфигурация.</param>
    public Procedure(GlobalConfig globalConfig, LocalConfig localConfig)
    {
        _queue = localConfig.Queue;

        var factory = new ConnectionFactory()
        {
            HostName = globalConfig.HostName,
            UserName = globalConfig.UserName,
            Password = globalConfig.Password
        };

        _connection = factory.CreateConnection();
        
        _channel = _connection.CreateModel();

        // declare a server-named queue
        _replyQueue = _channel.QueueDeclare(queue: "").QueueName;

        _consumer = new EventingBasicConsumer(_channel);
        
        _consumer.Received += (model, ea) =>
        {
            if (!_callbackMapper.TryRemove(ea.BasicProperties.CorrelationId, out var tcs))
            {
                return;
            }
                
            byte[] body = ea.Body.ToArray();

            string response = Encoding.UTF8.GetString(body);

            tcs.TrySetResult(response);
        };

        _channel.BasicConsume(
          consumer: _consumer,
          queue: _replyQueue,
          autoAck: true);
    }

    #endregion Constructors

    #region Public methods

    /// <summary>
    /// Вызвать асинхронно.
    /// </summary>
    /// <param name="message">Сообщение.</param>
    /// <param name="cancellationToken">Токен отмены.</param>
    /// <returns>Задача на получение результата выполнения процедуры.</returns>
    public Task<string> CallAsync(string message, CancellationToken cancellationToken = default)
    {
        var basicProperties = _channel.CreateBasicProperties();

        string correlationId = Guid.NewGuid().ToString();

        basicProperties.CorrelationId = correlationId;
        basicProperties.ReplyTo = _replyQueue;

        byte[] messageBytes = Encoding.UTF8.GetBytes(message);

        var tcs = new TaskCompletionSource<string>();
        
        _callbackMapper.TryAdd(correlationId, tcs);

        _channel.BasicPublish(
            exchange: "",
            routingKey: _queue,
            basicProperties: basicProperties,
            body: messageBytes);

        cancellationToken.Register(() => Cancel(correlationId));

        return tcs.Task;
    }

    /// <inheritdoc/>
    public void Dispose()
    {
        if (_disposed)
        {
            return;
        }

        Close();

        GC.SuppressFinalize(this);

        _disposed = true;
    }

    #endregion Public methods

    #region Private methods
    
    private void Cancel(string correlationId)
    {
        if (_callbackMapper.TryRemove(correlationId, out var tcs))
        {
            tcs.TrySetCanceled();
        }
    }

    private void Close()
    {
        _channel.Close();
        _connection.Close();
    }

    #endregion Private methods
}