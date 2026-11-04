
const courseService = require("../services/courseService");

const createCourse = async (req, res) => {
  try {
    const { name, code, department, credits } = req.body;

    if (!name || !code || !department || credits == null) {
      return res.status(400).json({
        message: "Name, code, department and credits are required",
      });
    }

    const course = await courseService.createCourse(req.body);

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(error.message === "Department not found" ? 404 : 500).json({
      message: error.message,
    });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await courseService.getCourseById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await courseService.updateCourse(
      req.params.id,
      req.body
    );

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    res.status(error.message === "Department not found" ? 404 : 500).json({
      message: error.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseService.deleteCourse(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
