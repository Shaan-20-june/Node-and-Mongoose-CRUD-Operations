const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if (!err) { console.log("Database connection created.."); } else {
    console.log("Connection failed..");
  }
});

require("./employee.model");