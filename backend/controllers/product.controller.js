import Product from "../models/product.model.js";

export const getProductsById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
    
        res.status(200).json({
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.title || !product.image || !product.description || !product.price) {
        return res.status(400).json({  message: "Please provide all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({
            message: "Internal server error",
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true },
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct,
        });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ 
            message: "Internal server error",
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
        });
    }
}