const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  /// get /me/stored/courses
  stored(req, res) {
    Course.find({}).then((courses) => {
      res.render("me/stored-courses", {
        courses: multipleMongooseToObject(courses),
      });
    });
  }
  trash(req, res) {
    Course.findDeleted().then((courses) => {
      res.render("me/trash-courses", {
        courses: multipleMongooseToObject(courses),
      });
    });
  }
}
module.exports = new MeController();
