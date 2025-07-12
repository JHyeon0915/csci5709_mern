import { useState, useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import AddProductModal from '../../components/AddProductModal';
import NoItem from '../../components/NoItem';
import SkeletonCard from '../../components/SkeletonCard';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProducts,
    deleteProduct,
} from '../../redux/actions/productActions';

const Product = () => {
    const dispatch = useDispatch();

    const { items, loading } = useSelector(state => state.products);
    const [modalOpen, setModalOpen] = useState(false);

    // loading, createLoading, updateLoading, deleteLoading, error
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (product) => {
        const confirmed = confirm(`Deleted products can't be reverted. Would you proceed to delete this product?`);

        if(!confirmed){
            return;
        }

        console.log(`Deleting product with ID: ${product.id}`);
        dispatch(deleteProduct(product.id));
    }

    return(
        <div style={{ paddingLeft: '7rem', paddingRight: '7rem'}}>
            { loading && <SkeletonCard /> }
            <div className="d-flex justify-content-end">
                <button
                  className="d-flex align-items-center gap-1 w-fit-content my-4 bg-primary text-white rounded"
                  onClick={() => setModalOpen(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                    <p className="d-flex align-items-center m-0">Add Product</p>
                </button>
            </div>
            {items.length === 0 ? <NoItem /> :
                <ul className="d-flex flex-wrap gap-3 gap-md-5 list-unstyled">
                    {items.map((product) => 
                        <ProductItem
                            key={product.id}
                            product={product}
                            handleDelete={handleDelete}
                        />
                    )}
                </ul>
            }
            {/* Modal */}
            <AddProductModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    )
}

export default Product;