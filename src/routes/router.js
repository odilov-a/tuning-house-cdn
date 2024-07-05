const { Router } = require("express");
const imageRoutes = require("./image.routes.js");
const router = Router();

router.use("/images", imageRoutes);
module.exports = router;