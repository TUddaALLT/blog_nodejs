const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_edu_dev");
    console.log("connect oke");
  } catch (error) {
    console.log("not oke");
  }
}
module.exports = { connect };
