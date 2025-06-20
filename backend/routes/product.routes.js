import express from 'express';
import { 
    getProductsById,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();
router.use(auth);

router.get('/', auth, getAllProducts);
router.get('/:id', getProductsById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;