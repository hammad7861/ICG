const express = require("express");
const router = express.Router();

// Routers
const authRouter = require("./auth");
const userRouter = require("./user");
const productRouter = require("./product");

// Middlewares
const { authMiddleware } = require("../middlewares");

router.use("/auth", authRouter);
// router.use(authMiddleware);
router.use("/users", userRouter);
router.use("/products", productRouter);

module.exports = router;
