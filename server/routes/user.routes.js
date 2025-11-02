import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

// Create user
router.post("/", userCtrl.create);

// Get all users
router.get("/", userCtrl.list);

// Get single user by ID
router.get("/:userId", userCtrl.read);

// Update user
router.put("/:userId", userCtrl.update);

// Delete user by ID
router.delete("/:userId", userCtrl.remove);

// Param middleware
router.param("userId", userCtrl.userByID);

export default router;
