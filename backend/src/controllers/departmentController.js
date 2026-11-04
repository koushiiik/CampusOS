
const mongoose = require("mongoose");
const departmentService = require("../services/departmentService");

// Create department
const createDepartment = async (req, res) => {
  try {
    const { name, code, description } = req.body;

    if (!name || !code) {
      return res.status(400).json({
        success: false,
        message: "Department name and code are required"
      });
    }

    const department = await departmentService.createDepartment({
      name,
      code,
      description
    });

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      data: department
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Department name or code already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to create department"
    });
  }
};

// Get all departments
const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getDepartments();

    res.status(200).json({
      success: true,
      count: departments.length,
      data: departments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch departments"
    });
  }
};

// Get department by ID
const getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department ID"
      });
    }

    const department = await departmentService.getDepartmentById(id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found"
      });
    }

    res.status(200).json({
      success: true,
      data: department
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch department"
    });
  }
};

// Update department
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code, description, isActive } = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department ID"
      });
    }

    const allowedFields = ["name", "code", "description", "isActive"];
    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide at least one field to update"
      });
    }

    const department = await departmentService.updateDepartment(
      id,
      updates
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      data: department
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Department name or code already exists"
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to update department"
    });
  }
};

// Delete department
const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department ID"
      });
    }

    const department = await departmentService.deleteDepartment(id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Department deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete department"
    });
  }
};

// Assign HOD
const assignHOD = async (req, res) => {
  try {
    const { id } = req.params;
    const { facultyId } = req.body;

    if (!mongoose.isValidObjectId(id) ||
        !mongoose.isValidObjectId(facultyId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department or faculty ID"
      });
    }

    const department = await departmentService.assignHOD(
      id,
      facultyId
    );

    res.status(200).json({
      success: true,
      message: "HOD assigned successfully",
      data: department
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get department HOD
const getDepartmentHOD = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department ID"
      });
    }

    const department = await departmentService.getDepartmentHOD(id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found"
      });
    }

    res.status(200).json({
      success: true,
      data: department.hod
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Remove HOD assignment
const removeHOD = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid department ID"
      });
    }

    const department = await departmentService.removeHOD(id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "HOD assignment removed successfully",
      data: department
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  assignHOD,
  getDepartmentHOD,
  removeHOD
};
