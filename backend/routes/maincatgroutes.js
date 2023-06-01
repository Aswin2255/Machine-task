import express from "express";
import { getAllcatg } from "../controller/maincatgcontroller.js";
const router = express.Router();

// this will fetch all main catagories
router.get("/getallcatg", getAllcatg);

export default router;
