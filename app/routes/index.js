const express = require("express");
const router = express.Router();

// Routers
const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");
const eventRouter = require("./event");
const mediaAndNewsRouter = require("./mediaAndNews");
const articleRouter = require("./article");
const blogRouter = require("./blog");
const brochureRouter = require("./brochure");
const jobRouter = require("./job");

// Middlewares
const { authMiddleware } = require("../middlewares");

router.use("/auth", authRouter);
// router.use(authMiddleware);
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/events", eventRouter);
router.use("/mediaAndNews", mediaAndNewsRouter);
router.use("/articles", articleRouter);
router.use("/blogs", blogRouter);
router.use("/brochures", brochureRouter);
router.use("/jobs", jobRouter);

module.exports = router;
