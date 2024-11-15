const authRouter = require("express").Router();

// controllers
const {
  auth: {
    localLoginController,
    updatePasswordController,
    forgotPasswordController,
    resetPasswordController,
  },
} = require("../../controllers");

// validators
const {
  auth: {
    loginValidationSchema,
    updatePasswordValidationSchema,
    forgotPasswordValidationSchema,
    resetPasswordValidationSchema,
  },
} = require("../../validators");

// middlewares
const { validateInputs, sanitizeInputs } = require("../../middlewares");

// routes
authRouter.post(
  "/login",
  [validateInputs(loginValidationSchema), sanitizeInputs(["password"])],
  localLoginController.login
);

authRouter.post(
  "/updatePassword",
  [
    validateInputs(updatePasswordValidationSchema),
    sanitizeInputs(["currentPassword", "newPassword", "confirmNewPassword"]),
  ],
  updatePasswordController.updatePassword
);

authRouter.post(
  "/forgotPassword",
  [validateInputs(forgotPasswordValidationSchema), sanitizeInputs()],
  forgotPasswordController.forgotPassword
);

authRouter.post(
  "/resetPassword",
  [
    validateInputs(resetPasswordValidationSchema),
    sanitizeInputs(["newPassword", "confirmNewPassword"]),
  ],
  resetPasswordController.resetPassword
);

module.exports = authRouter;
