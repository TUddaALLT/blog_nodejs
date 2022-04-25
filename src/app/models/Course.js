const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: { type: "string", require: true },
    description: { type: "string", default: "" },
    img: { type: "string", default: "" },
    videoId: { type: "string", default: "" },
    level: { type: "string", default: "" },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true },
);
// mongoose plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Course", Course);
