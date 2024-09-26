
import Product from "../Models/ProductSchema.js";

export const readProductControllerfn = async (req, res) => {
    try {
        const { productId } = req.params; // Get productId from request parameters

        // Find the product by its ID in the database
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Send the product data as a response
        res.status(200).json({ message: "Product found", product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
};

export const readAllProductsControllerfn = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        // Send all products as a response
        res.status(200).json({ message: "Products found", products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};
