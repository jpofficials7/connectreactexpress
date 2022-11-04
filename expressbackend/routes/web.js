import express from "express";
import StudentController from "../controllers/studentController.js";

//creating an object of router
const router = express.Router();
router.get("/student", StudentController.getAllDoc);

export default router;
