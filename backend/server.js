import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5200;

app.use(cors());

app.use(express.json()); // Allow JSON body parsing

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// In-memory products array
let products = [];
let currentId = 1;

// Create
app.post('/api/products', (req, res) => {
    const newProduct = { id: currentId++, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Read all
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Read by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) res.json(product);
    else res.status(404).json({ message: 'Product not found' });
});

// Update
app.put('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = { id: parseInt(req.params.id), ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Delete
app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        res.json(deletedProduct[0]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});