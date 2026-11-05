const adminDashboardService = require("../services/adminDashboardService");

const getDashboardStats = async (req, res) => {
try {
const stats = await adminDashboardService.getDashboardStats();

res.status(200).json({
  success: true,
  data: stats,
});

} catch (error) {
res.status(500).json({
success: false,
message: error.message,
});
}
};

module.exports = {
getDashboardStats,
};