const express = require("express");
const router = express.Router();

// Routers
const productRouter = require("./product");
const eventRouter = require("./event");
const mediaAndNewsRouter = require("./mediaAndNews");
const articleRouter = require("./article");
const blogRouter = require("./blog");
const brochureRouter = require("./brochure");
const jobRouter = require("./job");

router.use("/products", productRouter);
router.use("/events", eventRouter);
router.use("/mediaAndNews", mediaAndNewsRouter);
router.use("/articles", articleRouter);
router.use("/blogs", blogRouter);
router.use("/brochures", brochureRouter);
router.use("/jobs", jobRouter);

module.exports = router;
