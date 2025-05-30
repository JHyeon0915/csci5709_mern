import React from 'react';
import ProductItem from '../components/ProductItem';

const Product = () => {
    const products = [
        {
            name: 'Wireless Headphones',
            desc: 'Noise cancelling over-ear headphones',
            price: 120,
            src: 'https://www.thesonyshop.ca/cdn/shop/products/WHCH520B_2_3000x3000.jpg?v=1676989737',
        },
        {
            name: 'Smart Watch',
            desc: 'Smart searable with health tracking',
            price: 80,
            src: 'https://www.zamels.com.au/cdn/shop/products/2013929_1.jpg?v=1681962613',
        },
        {
            name: 'Laptop',
            desc: '14-inch Full HD display, 256GB SSD',
            price: 600,
            src: 'https://p4-ofp.static.pub//fes/cms/2024/02/23/pz4crg2y5i5h33rjnk60i0ep7xq7u4760951.jpg',
        },
    ];

    return(
        <div style={{ paddingLeft: '7rem', paddingRight: '7rem'}}>
            <div className="d-flex justify-content-end">
                <button className="d-flex align-items-center gap-1 w-fit-content my-4 bg-primary text-white rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                    <p className="d-flex align-items-center m-0">Add Product</p>
                </button>
            </div>
            <ul className="d-flex flex-wrap gap-3 gap-md-5 list-unstyled">
                {products.map((product) => 
                    <ProductItem key={product.name} thumbnail={product.src} name={product.name} desc={product.desc} price={product.price} />
                )}
            </ul>
        </div>
    )
}

export default Product;