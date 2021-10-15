const controller = require("../controllers/invoice.controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //   app.get("/api/invoices", [], controller.findAllProvinces);

  //   app.get("/api/invoices/:provinceId", [], controller.findProvince);

  app.post("/api/invoices", [], controller.createInvoice);

  //   app.put("/api/invoices/:provinceId", [], controller.updateProvince);

  //   app.delete("/api/invoices/:provinceId", [], controller.deleteProvince);

  //   app.delete(
  //     "/api/invoices/:provinceId/restore",
  //     [],
  //     controller.restoreProvince
  //   );
};
