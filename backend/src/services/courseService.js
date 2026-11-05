
const Course = require("../models/Course");
const Department = require("../models/Department");

const createCourse = async (data) => {
  const department = await Department.findById(data.department);

  if (!department) {
    throw new Error("Department not found");
  }

  return await Course.create(data);
};

const getCourses = async () => {
  return await Course.find().populate("department", "name code");
};

const getCourseById = async (id) => {
  return await Course.findById(id).populate("department", "name code");
};

const updateCourse = async (id, data) => {
  if (data.department) {
    const department = await Department.findById(data.department);

    if (!department) {
      throw new Error("Department not found");
    }
  }

  return await Course.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
