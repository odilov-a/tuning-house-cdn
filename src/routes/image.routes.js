const { Router } = require("express");
const imageController = require("../controller/image.controller.js");
const uploadMiddleware = require("../middlewares/multer.config.js");
const imageRoutes = Router();

imageRoutes.get("/upload", imageController.getAll);
imageRoutes.post("/upload", uploadMiddleware.single("images"), imageController.uploadImage);

module.exports = imageRoutes;