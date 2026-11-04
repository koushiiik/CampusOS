const Faculty = require("../models/Faculty");
const Department = require("../models/Department");

// Create faculty
const createFaculty = async (data) => {
  const department = await Department.findById(data.department);

  if (!department) {
    throw new Error("Department not found");
  }

  return await Faculty.create(data);
};

// Get all faculty
const getFaculty = async () => {
  return await Faculty.find().populate("department", "name code");
};

// Get faculty by ID
const getFacultyById = async (id) => {
  return await Faculty.findById(id).populate("department", "name code");
};

// Update faculty
const updateFaculty = async (id, data) => {
  if (data.department) {
    const department = await Department.findById(data.department);

    if (!department) {
      throw new Error("Department not found");
    }
  }

  return await Faculty.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).populate("department", "name code");
};

// Deactivate faculty
const deactivateFaculty = async (id) => {
  return await Faculty.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};

module.exports = {
  createFaculty,
  getFaculty,
  getFacultyById,
  updateFaculty,
  deactivateFaculty,
};