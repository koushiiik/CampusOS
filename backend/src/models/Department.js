
const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Department name is required"],
      trim: true,
      unique: true
    },

    code: {
      type: String,
      required: [true, "Department code is required"],
      trim: true,
      uppercase: true,
      unique: true
    },

    description: {
      type: String,
      trim: true,
      default: ""
    },
    hod: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Faculty",
    default: null,
},

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Department", departmentSchema);
