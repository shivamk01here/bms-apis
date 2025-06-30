const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().allow(''),
  service: Joi.string().allow(''),
  message: Joi.string().required(),
  budget: Joi.string().allow('')
});

exports.validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
