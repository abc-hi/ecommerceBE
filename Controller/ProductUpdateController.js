

import Product from "../Models/ProductSchema.js";
import cloudinary from "../cloudinaryConfig.js"; // Ensure this path is correct

const productUpdateControllerfn = async (req, res) => {
    try {
        const { productId } = req.params; // Extract productId from URL

        // Find the product by ID
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Handle image update if a new image is uploaded
        if (req.file) {
            // Upload the new image to Cloudinary
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            product.image = result.secure_url; // Update the image URL
        }

        // Update other product details
        product.productName = req.body.productName || product.productName;
        product.brand = req.body.brand || product.brand;
        product.price = req.body.price ? Number(req.body.price) : product.price;
        product.category = req.body.category || product.category;
        product.description = req.body.description || product.description;
        product.stock = req.body.stock ? Number(req.body.stock) : product.stock;

        // Save the updated product to the database
        await product.save();
        console.log("Product updated successfully");

        // Send a success response
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        console.error("Error during product update:", error);
        res.status(500).json({ message: "Error in updating product", error: error.message });
    }
}

export default productUpdateControllerfn;
