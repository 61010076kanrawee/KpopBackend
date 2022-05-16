const Joi = require("@hapi/joi");

const gateways = require("./gateways");

exports.register = function (req, res) {
  let data = req.body;
  if (data.password != data.conpassword) {
    return res.status(400).send({ message: "password mismatch" });
  }
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(5).max(30).required(),
    conpassword: Joi.string().min(5).max(30).required(),
  });
  const { error } = schema.validate(data);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    gateways.register_gateways(req, res);
  }
};
