import express from 'express';
import {readProductControllerfn,readAllProductsControllerfn } from '../Controller/readProductController.js';

const router=express.Router();


// Route to get a single product by its ID
router.get("/readproduct/:productId",readProductControllerfn);

// Route to get all products
router.get("/readallproducts",readAllProductsControllerfn);
export default router;