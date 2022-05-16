const services = require("../../controllers/service.register");

exports.register_gateways = function (req, res) {
  services.registerService(req.body, function (error, result) {
    if (result.status != 200) {
      res.status(result.status).send({ error: result.message });
    } else {
      res.status(200).send({ message: result.message });
    }
  });
};
