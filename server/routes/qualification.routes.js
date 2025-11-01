import express from "express";
import Qualification from "../models/qualification.model.js";

const router = express.Router();

router.route("/")
  .get(async (req, res) => {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  })
  .post(async (req, res) => {
    const newQualification = await Qualification.create(req.body);
    res.json(newQualification);
  });

export default router;
