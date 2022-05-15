const Joi = require("@hapi/joi");

const gateways = require('./gateways');

exports.getAll = function (req, res) {
  gateways.getAll(req, res);
};