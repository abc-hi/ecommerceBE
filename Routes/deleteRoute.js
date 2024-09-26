import express from 'express';
import deleteProductControllerfn from '../Controller/deleteController.js'; 
const router = express.Router()
import adminAuth from '../Middleware/AuthMiddleware.js';

router.delete("/deleteproduct/:productId",adminAuth,deleteProductControllerfn)


export default router;