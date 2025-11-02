import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", authCtrl.requireSignin, userCtrl.list);
router.post("/", userCtrl.create);
router.get("/", userCtrl.list);
router.get("/:userId", userCtrl.read);
router.put("/:userId", userCtrl.update);
router.delete("/:userId", userCtrl.remove);
router.delete("/", userCtrl.removeAll);

router.param("userId", userCtrl.userByID);

export default router;
