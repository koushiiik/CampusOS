
const express = require("express");
const router = express.Router();

const departmentController = require("../controllers/departmentController");

router.post("/", departmentController.createDepartment);

router.get("/", departmentController.getDepartments);

router.get("/:id", departmentController.getDepartmentById);

router.put("/:id", departmentController.updateDepartment);

router.delete("/:id", departmentController.deleteDepartment);

// HOD Management
router.put("/:id/hod", departmentController.assignHOD);
router.get("/:id/hod", departmentController.getDepartmentHOD);
router.delete("/:id/hod", departmentController.removeHOD);

module.exports = router;
