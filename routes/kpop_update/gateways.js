const services = require("../../controllers/service.update");

exports.getAll = function (req, res) {
  services.getAll(function (error, result) {
    if (error) {
      res.status(400).send({ error: error.details[0].message });
    } else {
      res.status(200).send(result);
    }
  });
};