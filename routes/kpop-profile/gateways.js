const services = require("../../controllers/service.profile");

exports.getAll = function (req, res) {
  services.getAll(function (error, result) {
    if (error) {
      res.status(400).send({ error: error.details[0].message });
    } else {
      res.status(200).send(result);
    }
  });
};
exports.getProfileById = function (req, res) {
  services.getProfileById(req.params.name, function (error, result) {
    if (error) {
      res.status(422).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};

exports.postAll = function (req, res) {
  services.updateProfile(req, function (error, result) {
    if (error) {
      res.status(422).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};
