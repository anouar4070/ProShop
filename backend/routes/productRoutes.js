import express from "express";
const router = express.Router();
//import products from "../data/products.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    //throw new Error('Some error')
    res.json(products);
  })
);

/* *** we use asyncHandler middleware instead of doing this: ***
  router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    next(err); // You have to manually pass the error to Express.
  }
});
 */

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
