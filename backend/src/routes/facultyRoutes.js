const express = require("express");
const router = express.Router();

const facultyController = require("../controllers/facultyController");

// Create faculty
router.post("/", facultyController.createFaculty);

// Get all faculty
router.get("/", facultyController.getFaculty);

// Get faculty by ID
router.get("/:id", facultyController.getFacultyById);

// Update faculty
router.put("/:id", facultyController.updateFaculty);

// Deactivate faculty
router.delete("/:id", facultyController.deactivateFaculty);

module.exports = router;