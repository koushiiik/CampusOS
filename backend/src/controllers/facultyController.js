const facultyService = require("../services/facultyService");

// Create faculty
const createFaculty = async (req, res) => {
  try {
    const { name, employeeId, email, department, designation } = req.body;

    if (!name || !employeeId || !email || !department || !designation) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const faculty = await facultyService.createFaculty(req.body);

    res.status(201).json({
      message: "Faculty created successfully",
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all faculty
const getFaculty = async (req, res) => {
  try {
    const faculty = await facultyService.getFaculty();

    res.status(200).json({
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get faculty by ID
const getFacultyById = async (req, res) => {
  try {
    const faculty = await facultyService.getFacultyById(req.params.id);

    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json({ data: faculty });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update faculty
const updateFaculty = async (req, res) => {
  try {
    const faculty = await facultyService.updateFaculty(
      req.params.id,
      req.body
    );

    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json({
      message: "Faculty updated successfully",
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deactivate faculty
const deactivateFaculty = async (req, res) => {
  try {
    const faculty = await facultyService.deactivateFaculty(req.params.id);

    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }

    res.status(200).json({
      message: "Faculty deactivated successfully",
      data: faculty,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFaculty,
  getFaculty,
  getFacultyById,
  updateFaculty,
  deactivateFaculty,
};