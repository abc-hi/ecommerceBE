import express from 'express';
import { upload } from '../Multer.js'; // Make sure this is set up to handle file uploads

import productUpdateControllerfn from "../Controller/ProductUpdateController.js";
import multer from 'multer';
import adminAuth from '../Middleware/AuthMiddleware.js';

const router = express.Router()


router.put("/productupdate/:productId",adminAuth, upload.single('image'), productUpdateControllerfn);

export default router;