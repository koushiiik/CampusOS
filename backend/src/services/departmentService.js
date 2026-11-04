
const Department = require("../models/Department");
const Faculty = require("../models/Faculty");

const createDepartment = async (data) => {
  return await Department.create(data);
};

const getDepartments = async () => {
  return await Department.find().sort({ createdAt: -1 });
};

const getDepartmentById = async (id) => {
  return await Department.findById(id);
};

const updateDepartment = async (id, data) => {
  return await Department.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

const deleteDepartment = async (id) => {
  return await Department.findByIdAndDelete(id);
};

// Assign HOD
const assignHOD = async (departmentId, facultyId) => {
  const department = await Department.findById(departmentId);

  if (!department) {
    throw new Error("Department not found");
  }

  const faculty = await Faculty.findById(facultyId);

  if (!faculty || !faculty.isActive) {
    throw new Error("Active faculty not found");
  }

  if (faculty.department.toString() !== departmentId) {
    throw new Error("Faculty must belong to the same department");
  }

  department.hod = facultyId;

  return await department.save();
};

// Get department HOD
const getDepartmentHOD = async (departmentId) => {
  return await Department.findById(departmentId)
    .populate("hod", "name employeeId email designation");
};

// Remove HOD assignment
const removeHOD = async (departmentId) => {
  return await Department.findByIdAndUpdate(
    departmentId,
    { hod: null },
    { new: true }
  );
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

