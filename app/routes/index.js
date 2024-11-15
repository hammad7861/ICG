const express = require("express");
const router = express.Router();

// Routers
const authRouter = require("./auth");
const userRouter = require("./user");

// Middlewares
const { authMiddleware } = require("../middlewares");

router.use("/auth", authRouter);
router.use(authMiddleware);
router.use("/users", userRouter);

module.exports = router;
