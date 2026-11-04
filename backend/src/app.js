const express = require("express");
const cors = require("cors");

const app = express();
const departmentRoutes = require("./routes/departmentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check / welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Campus LMS API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/admin/departments", departmentRoutes);
app.use("/api/admin/courses", courseRoutes);
app.use("/api/admin/faculty", facultyRoutes);

module.exports = app;

