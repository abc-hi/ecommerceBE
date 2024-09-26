//  import express from 'express';
// import addProductControllerfn from '../Controller/addProductController.js';
// import ProductSchema from "../Models/ProductSchema.js";
// import multer from 'multer';
// import { upload } from '../Multer.js';

//  const router = express.Router()

//  router.post("/addproduct",upload.single('image'),addProductControllerfn)
// // Route for adding a product with image upload




//  export default router;

// addProductRoute.js
import express from 'express';
import addProductControllerfn from '../Controller/addProductController.js';
import { upload } from '../Multer.js';
import adminAuth from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post("/addproduct",adminAuth, upload.single('image'), addProductControllerfn); // Correct route for adding product

export default router;
