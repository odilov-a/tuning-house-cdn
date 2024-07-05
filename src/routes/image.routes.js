const { Router } = require("express");
const imageController = require("../controller/image.controller.js");
const upload = require("../middlewares/multer.config.js");
const imageRoutes = Router();

imageRoutes.get("/upload", imageController.getAll);
imageRoutes.post("/upload", upload.single("images"), imageController.uploadImage);

module.exports = imageRoutes;