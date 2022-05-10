const Joi = require("@hapi/joi");

const gateways = require('./gateways');

exports.getAll = function (req, res) {
  gateways.getAll(req, res);
};

exports.getProfileById = async function (req, res) {
  let data = req.params;
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    gateways.getProfileById(req, res);
  }
};

exports.postAll = async function (req, res) {
  gateways.postAll(req, res);
};

exports.postUpdateById = async function (req, res) {
  let data = req.params;
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
  });
  const { error } = await schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    gateways.postUpdateById(req, res);
  }
};

