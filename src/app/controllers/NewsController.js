class NewsController {
  //GET /news
  index(req, res) {
    res.render("news");
  }
  //GET /news/slug
  show(req, res) {
    res.render("courses/create");
  }
}
module.exports = new NewsController();
