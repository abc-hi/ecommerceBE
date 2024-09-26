import mongoose from 'mongoose';



const productSchema = new mongoose.Schema({
    productName :
    { type:String,
        required:true,
    },
    image:
    { type:String,
        required:true,
    },
    brand:
    { type:String,
        required:true,
    },
    price :{ type:Number,
        required:true,
    },
    category: { type:String,
        required:true,
    },
    description: { type:String,
        required:true,
    },
    stock:{ type:String,
        required:true,
        default:0,
    }


})

const Product = mongoose.model("Product", productSchema)
export default Product;