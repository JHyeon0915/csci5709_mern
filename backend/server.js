import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5400;

const allowedOrigins = [
    'http://localhost:5173', // React app
    'https://csci5709-mern.netlify.app', // Production URL
];

app.use(cors({
    origin: function(origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) {
            callback(null, true);
        }
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json()); // Allow JSON body parsing
app.use(
    '/api-docs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerSpec),
)

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome, server is running');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});