import express from "express";
import Project from "../models/project.model.js";

const router = express.Router();

router.route("/")
  .get(async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
  })
  .post(async (req, res) => {
    const newProject = await Project.create(req.body);
    res.json(newProject);
  });

export default router;
