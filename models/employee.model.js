const mongoose = require("mongoose");
const validator = require("validator");

let employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    required: "This field is required",
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid e-mail");
      }
    }
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

mongoose.model("Employee", employeeSchema);