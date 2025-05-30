import { Link } from 'react-router';

const Navigator = () => {
    return(
        <nav className='d-flex align-itmes-center'>
            <ul className='list-unstyled list-inline my-0'>
                <li className='list-inline-item'>
                    <Link className='text-dark text-decoration-none' to='/'>Home</Link>
                </li>
                <li className='list-inline-item'>
                    <Link className='text-dark text-decoration-none' to='/product'>Product</Link>
                </li>
                <li className='list-inline-item'>
                    <Link className='text-dark text-decoration-none' to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigator;