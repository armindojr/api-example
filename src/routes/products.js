import express from 'express';
import validateProduct from '../middleware/validateProduct.js';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

// Listar todos os produtos
router.get('/', getAllProducts);

// Obter um produto por ID
router.get('/:id', getProductById);

// Criar um novo produto
router.post('/', validateProduct, createProduct);

// Atualizar um produto
router.put('/:id', validateProduct, updateProduct);

// Deletar um produto
router.delete('/:id', deleteProduct);

export default router;
