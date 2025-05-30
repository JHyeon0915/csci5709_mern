import React from 'react';
import { Link } from 'react-router';
import Image from '../assets/react.svg';

const Home = () => {
    return(
        <div className='d-flex justify-content-start align-items-center vh-100 bg-home' style={{ paddingLeft: '7rem', paddingRight: '7rem'}}>
            <div className='d-flex flex-column justify-content-start w-50' style={{ minWidth: '25%' }}>
                <h1 className='text-white text-start'>Welcome to ProdManage</h1>
                <p className='text-white text-start mt-1'>
                    Effortlessly manage your products with our all-in-one tool.
                    Create, view, edit, and delete products - fast, simple, and reliable.
                </p>
                <button className='w-fit-content rounded mt-3'>
                    <Link className='text-black text-decoration-none' to='/product'>Explore Products</Link>
                </button>
            </div>
            <img src={Image} width='300rem' height='50%' style={{ objectFit: 'cover', marginLeft: '3%' }} />
        </div>
    )
}

export default Home;