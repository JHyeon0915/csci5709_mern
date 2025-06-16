import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 5200;

app.use(cors());

app.use(express.json()); // Allow JSON body parsing

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Welcome, server is running');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});