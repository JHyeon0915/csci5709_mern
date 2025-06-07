import NoItemImg from '../assets/noItem.jpg';

const NoItem = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <img src={NoItemImg} width={200} />
            <p>We are currently out of stock</p>
        </div>
    );
}

export default NoItem;