import Product from "../Models/ProductSchema.js";

const deleteProductControllerfn = async (req, res) => {
    try {
        const { productId } = req.params; // Get the productId from the URL params

        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Return success message if the product is deleted
        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        console.error("Error during product deletion:", error);
        res.status(500).json({ message: "Error in deleting product", error: error.message });
    }
};

export default deleteProductControllerfn;
