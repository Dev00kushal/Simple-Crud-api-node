const express =  require("express");
const router = express.Router();
const {getProducts,getAProduct,createProduct, updateProduct, deleteProduct} =  require("../controllers/product.controllers.js")

router.get("/",getProducts);
router.get("/:id",getAProduct);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);


module.exports = router;