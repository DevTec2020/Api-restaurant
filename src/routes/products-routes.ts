import { ProductController } from "@/controllers/products-controllers.js";
import { Router } from "express";

const productsRoutes = Router()
const productController = new ProductController()

productsRoutes.get("/", productController.index)

export {productsRoutes}