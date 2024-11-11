const express = require("express");
const router = express.Router();

// Routers
const userRouter = require("./user");

// Middlewares
// const { authMiddleware } = require("../middlewares");

router.use("/users", userRouter);
// router.use(authMiddleware);

module.exports = router;
