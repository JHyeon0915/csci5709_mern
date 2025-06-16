import express from 'express';
import { 
    getProductsById,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProductsById);

router.get('/', createProduct);

router.get('/:id', updateProduct);

router.get('/:id', deleteProduct);

export default router;