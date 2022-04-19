const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: "string", require: true },
    description: { type: "string", default: "" },
    image: { type: "string", default: "" },
    videoId: { type: "string", default: "" },
    level: { type: "string", default: "" },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Course", Course);
