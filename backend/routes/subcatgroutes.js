import express from "express";
import { getAllcatg } from "../controller/subcatgcontroller.js";

const router = express.Router();
router.get("/getsubcatg/:id", getAllcatg);
//router.post('/getsubcatg',getAllproduct)
export default router;
