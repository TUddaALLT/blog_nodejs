const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  /// get /courses/create
  create(req, res) {
    res.render("courses/create");
  }
  /// post /courses/store
  store(req, res) {
    req.body.image = ``;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }
  /// get /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) }),
      )
      .catch(next);
  }
  /// put /courses/:id/
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect("/me/stored/courses"),
    );
  }
}
module.exports = new CourseController();
