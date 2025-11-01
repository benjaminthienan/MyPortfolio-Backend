import express from "express";
import Contact from "../models/contact.model.js";
const router = express.Router();

// get all
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// get one by id
router.get("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  contact ? res.json(contact) : res.status(404).json({ message: "Not found" });
});

// add new
router.post("/", async (req, res) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
});

// update by id
router.put("/:id", async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).json({ message: "Not found" });
});

// delete by id
router.delete("/:id", async (req, res) => {
  const deleted = await Contact.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: "Deleted" }) : res.status(404).json({ message: "Not found" });
});

// delete all
router.delete("/", async (req, res) => {
  const result = await Contact.deleteMany({});
  res.json({ deletedCount: result.deletedCount });
});

export default router;
