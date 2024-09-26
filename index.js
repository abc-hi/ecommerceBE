import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import regRoute from './Routes/RegisterRoute.js'
import DBConnection from './Database/DBconfig.js';
import logRoute from './Routes/LoginRoute.js';
import addProductRoute from './Routes/addProuductRoute.js'
import updaterouter from './Routes/UpdateRoute.js'
import readrouter from './Routes/readRouter.js'
import deleterouter from './Routes/deleteRoute.js'

const app= express();
app.use(cors({
  origin: 'https://revaecommerce.netlify.app',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Define allowed methods
    credentials: true,  // Include credentials like cookies if needed
}));

  
  
  app.use(express.json())
DBConnection()
const port = process.env.PORT
app.get("/",(req,res)=>{
    res.status(200).json("API is working fine")
})

//http://localhost:4001/api/register
app.use("/api", regRoute)
//http://localhost:4001/api/login

app.use("/api",logRoute)

//http://localhost:4001/api/addproduct
app.use("/api",addProductRoute)
//http://localhost:4001/api/productupdate
//http://localhost:4001/api/read
app.use("/api",updaterouter)
//http://localhost:4001/api/readallproducts
//http://localhost:4001/api/readproduct/:productId


app.use("/api",readrouter)
//http://localhost:4001/api/deleteproduct/:productId
app.use("/api",deleterouter)

app.listen(port,()=>{
    console.log(`APP is running on the port,${port}`)
})