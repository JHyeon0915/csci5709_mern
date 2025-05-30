import Navigator from './Navigator';

const Header = () => {
    return (
        <header className='d-flex justify-content-between align-items-center bg-light py-3' style={{ paddingLeft: '7rem', paddingRight: '7rem'}}>
            <p className='my-0'><strong>ProdManage</strong></p>
            <Navigator />
        </header>
    );
}

export default Header;