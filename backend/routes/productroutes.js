import express from "express";
import { getAllproduct, getcatgpro } from "../controller/productcontroller.js";

const router = express.Router();

//This will fetch all the products according to catagory
router.get("/getallproduct/:id", getcatgpro);

// this wil fetch all the products
router.get("/getallproduct", getAllproduct);

export default router;
