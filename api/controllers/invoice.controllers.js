const amqp = require("amqplib/callback_api");
// const CONN_URL = 'amqp://localhost/gsgmnvnl';
const CONN_URL = "amqp://localhost";

const mq = require("../services/MQ.services");

exports.createInvoice = async (req, res) => {
  const invoice = {
    invoiceNumber: req.body.invoiceNumber,
    patientId: req.body.patientId,
    createdById: req.body.createdById,
    amount: req.body.amount,
    status: "UNPAID", // UNPAID, PARTIALLY PAID, PAID
  };

  if (req.body.additionalInformation) {
    invoice.additionalInformation = req.body.additionalInformation;
  }

  await mq
    .publishToQueue(invoice)
    .then(() => {
      res.send({ "message-sent": true });
    })
    .catch((err) => {
      res.send({ err: err });
    });

  //   res.statusCode = 200;
  //   res.data = { "message-sent": true };
  //   next();

  //   db.sequelize
  //     .transaction(async (t) => {
  //       const createdProvince = await Province.create(province, {
  //         transaction: t,
  //       });
  //       return createdProvince;
  //     })
  //     .then((data) => {
  //       res.send({ data, status: 1 });
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message:
  //           err.message ||
  //           "Some error occurred while creating, transaction rolled back.",
  //       });
  //     });
};
