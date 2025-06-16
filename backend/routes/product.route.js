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

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;