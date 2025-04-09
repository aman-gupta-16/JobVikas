// Import required modules
import express from "express";
import {
  postJob,
  getAdminJobs,
  getAllJobs,
  getJobById,
} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Define a route to retrieve all available books
router.post("/post", isAuthenticated, postJob);
router.get("/get", getAllJobs);
router.get("/getadminjobs", isAuthenticated, getAdminJobs);
router.get("/get/:id", getJobById);

export default router;
