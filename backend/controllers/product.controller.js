export const getProductsById = async (req, res) => {
    try {
        const productId = req.params.id;
        // Simulate fetching product from a database
        const product = { id: productId, name: "Sample Product", price: 100 };
    
        if (!product) {
            return res.status(404).json({ 
                success: false,
                message: "Product not found",
            });
        }
    
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        // Simulate fetching all products from a database
        const products = [
            { id: 1, title: "Product 1", description: "Product 1 description", price: 100, image: "https://example.com/product1.jpg" },
            { id: 2, title: "Product 2", description: "Product 1 description", price: 200, image: "https://example.com/product2.jpg" },
        ];
    
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    console.log("Creating product:", product);

    if (!product.title || !product.image || !product.description || !product.price) {
        return res.status(400).json({ 
            success: false,
            message: "Please provide all fields",
        });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    try {
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
        });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        // Simulate deleting product from a database
        let product = { id: id, name: "Sample Product", price: 100 };
        
        if (!product) {
            return res.status(404).json({ 
                success: false,
                message: "Product not found",
            });
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