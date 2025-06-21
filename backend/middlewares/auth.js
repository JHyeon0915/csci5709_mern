import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET|| 'product_management_secret_key';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        res.status(401).json({ message: 'Unauthorized access' });
    }
}

export const auth = authMiddleware;
export default auth;