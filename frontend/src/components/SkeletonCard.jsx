import { Card } from 'react-bootstrap';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        <Card className='mb-4 shadow-sm'>
            <Skeleton height={180} className='card-img-top' />
            <Card.Body>
                <Skeleton width={'80%'} className='mb-2' />
                <Skeleton width={'60%'} />
            </Card.Body>
            <Card.Footer>
                <Skeleton width={'30%'} />
            </Card.Footer>
        </Card>
    );
}

export default SkeletonCard;