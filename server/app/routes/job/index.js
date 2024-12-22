const path = require("path");
const jobRouter = require("express").Router();

// controllers
const {
  jobs: {
    createJobController,
    getJobsController,
    getJobController,
    updateJobController,
    deleteJobController,
  },
} = require("../../controllers");

// validators
const {
  jobs: {
    createJobValidationSchema,
    getJobsValidationSchema,
    getJobValidationSchema,
    updateJobValidationSchema,
    deleteJobValidationSchema,
  },
} = require("../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../middlewares");

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

jobRouter.put(
  "/:jobId",
  [validateInputs(updateJobValidationSchema), sanitizeInputs()],
  updateJobController.updateJob
);

jobRouter.post(
  "/",
  [validateInputs(createJobValidationSchema), sanitizeInputs()],
  createJobController.createJob
);

jobRouter.delete(
  "/:jobId",
  [validateInputs(deleteJobValidationSchema), sanitizeInputs()],
  deleteJobController.deleteJob
);

module.exports = jobRouter;
