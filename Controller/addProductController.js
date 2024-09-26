


import ProductSchema from "../Models/ProductSchema.js"

    import cloudinary from 'cloudinary';

    const addProductControllerfn = async (req, res) => {
        console.log("Request Body:", req.body);
        console.log("Request File:", req.file);


       
        
        try {

            // Upload image to Cloudinary
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            console.log("Image uploaded:", result.secure_url);

            
            const { productName, brand, price, category, description, stock } = req.body;

            // Create a new product instance with the Cloudinary URL
            const newProduct = new ProductSchema({
                productName,
                image: result.secure_url, // Get the URL from Cloudinary
                brand,
                price: Number(price),
                category,
                description,
                stock: Number(stock)
            });

            // Save the new product to the database
            await newProduct.save();
            console.log("Product saved to database");

            // Send a success response
            res.status(201).json({ message: "Product added successfully", product: newProduct });
        } catch (error) {
            console.error("Error during product addition:", error);
            res.status(500).json({ message: "Error in product adding", error: error.message });
           
        }
    }

    export default addProductControllerfn