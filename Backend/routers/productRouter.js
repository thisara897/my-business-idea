import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productController.js"

const productRouter = express.Router()

productRouter.get("/:productId",getProductById)
productRouter.post("/", createProduct)
productRouter.get("/", getAllProducts)
productRouter.delete("/:productId", deleteProduct)
productRouter.put("/:productId", updateProduct)

export default productRouter