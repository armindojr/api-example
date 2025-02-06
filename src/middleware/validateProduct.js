import { body, validationResult } from 'express-validator';

export default function validateProduct(req, res, next) {
  body('name').isString().trim().withMessage('O nome deve ser uma string');
  body('price').isNumeric().withMessage('O preço deve ser um número');
  body('description').optional().isString().trim().withMessage('A descrição deve ser uma string');
  body('category').optional().isString().trim().withMessage('A categoria deve ser uma string');
  body('qty').optional().isInt({ min: 0 }).withMessage('O estoque deve ser um número não negativo');

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Erro de validação!',
      details: errors.array()
    });
  }

  next();
}
