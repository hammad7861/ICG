const path = require("path");
const userRouter = require("express").Router();

// controllers
const {
  users: {
    createUserController,
    getUserController,
    getUsersController,
    updateUserController,
    deleteUserController,
  },
} = require("../../controllers");

// validators
const {
  users: {
    createUserValidationSchema,
    getUserValidationSchema,
    getUsersValidationSchema,
    updateUserValidationSchema,
    deleteUserValidationSchema,
  },
} = require("../../validators/");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../middlewares");
const createMulterConfig = require("../../config/multerConfig");
const uploadPaths = {
  profileImage: path.resolve("assets/images/profiles"),
};
const profileUpload = createMulterConfig(uploadPaths);

// routes
userRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getUsersValidationSchema),
    sanitizeInputs(),
  ],
  getUsersController.getUsers
);

userRouter.get(
  "/:userId",
  [validateInputs(getUserValidationSchema), sanitizeInputs()],
  getUserController.getUser
);

userRouter.post(
  "/",
  profileUpload.single("profileImage"),
  [validateInputs(createUserValidationSchema), sanitizeInputs()],
  createUserController.createUser
);

userRouter.put(
  "/:userId",
  profileUpload.single("profileImage"),
  [validateInputs(updateUserValidationSchema), sanitizeInputs()],
  updateUserController.updateUser
);

userRouter.delete(
  "/:userId",
  [validateInputs(deleteUserValidationSchema), sanitizeInputs()],
  deleteUserController.deleteUser
);

module.exports = userRouter;
