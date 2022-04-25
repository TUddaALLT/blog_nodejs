const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.delete("/:id", courseController.destroy);
router.patch("/:id/restore", courseController.restore);
router.put("/:id", courseController.update);
router.get("/:slug", courseController.show);

module.exports = router;
