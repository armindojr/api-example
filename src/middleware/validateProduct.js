import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().strict().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  qty: Joi.number().strict().required()
});

export default function validateProduct(req, res, next) {
  const { error } = schema.validate(req.body);

  if (typeof error !== 'undefined') {
    return res.status(400).json({
      error: 'Erro de validação!',
      details: error.details[0].message
    });
  }

  next();
}
