
const Department = require("../models/Department");

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

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
};
