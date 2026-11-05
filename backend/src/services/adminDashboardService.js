const Department = require("../models/Department");
const Course = require("../models/Course");
const Faculty = require("../models/Faculty");

const getDashboardStats = async () => {
  const [
    totalDepartments,
    totalCourses,
    totalFaculty,
    activeFaculty,
  ] = await Promise.all([
    Department.countDocuments(),
    Course.countDocuments(),
    Faculty.countDocuments(),
    Faculty.countDocuments({ isActive: true }),
  ]);

  return {
    totalDepartments,
    totalCourses,
    totalFaculty,
    activeFaculty,
  };
};

module.exports = {
  getDashboardStats,
};