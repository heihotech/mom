const amqp = require("amqplib/callback_api");
// const CONN_URL = 'amqp://localhost/gsgmnvnl';
const CONN_URL = "amqp://localhost";

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

exports.publishToQueue = async (data) => {
  ch.sendToQueue(
    process.env.MQqueueName,
    Buffer.from(JSON.stringify(data).toString()),
    {
      persistent: true,
    }
  );
};

process.on("exit", (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
