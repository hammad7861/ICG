const jobRouter = require("express").Router();

// controllers
const {
  jobs: {
    getJobsController,
    getJobController,
  },
} = require("../../../controllers");

// validators
const {
  jobs: {
    getJobsValidationSchema,
    getJobValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

// routes
jobRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getJobsValidationSchema),
    sanitizeInputs(),
  ],
  getJobsController.getJobs
);

jobRouter.get(
  "/:jobId",
  [validateInputs(getJobValidationSchema), sanitizeInputs()],
  getJobController.getJob
);

module.exports = jobRouter;
