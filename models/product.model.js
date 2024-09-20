const { timeStamp } = require("console");
const mongoose =  require("mongoose");

const ProductSchema =  mongoose.Schema(
    {
        name : {
            type: String,
            required : [true, "Enter the product name"]
        },
        quanity : {
            type : Number,
            default: 0,
            required: [true,"Enter the quantity"]
        },
        price : {
            type : Number,
            default : 0,
            required: [true, "Please enter the price"]
        },
        image : {
            type : String,
            required : false,
        }
    },
    {
        timeStamp: true,
    }
)

const Product =  mongoose.model("Product",ProductSchema);

module.exports = Product;