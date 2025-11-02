import Qualification from "../models/qualification.model.js";

export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.status(200).json(qualifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: "Qualification not found" });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createQualification = async (req, res) => {
  try {
    const newQualification = await Qualification.create(req.body);
    res.status(201).json(newQualification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateQualification = async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Qualification not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteQualification = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Qualification not found" });
    res.json({ message: "Qualification deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAllQualifications = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
