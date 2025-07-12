import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navigator = () => {
    const navigate = useNavigate();
    
    const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return(
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href="/">ProdManage</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mx-auto'>
                        <Nav.Link to='/'>Home</Nav.Link>
                        <Nav.Link to='/product'>Product</Nav.Link>
                        <Nav.Link to='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        {isLoggedIn ? (
                            <Button variant='outline-danger' onClick={handleLogout}>Logout</Button>
                        ) : (
                            <Nav.Link to='/login'>
                                <Button variant='outline-success'>Login</Button>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigator;