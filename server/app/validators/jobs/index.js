const createJobValidationSchema = require("./createJobValidationSchema");
const deleteJobValidationSchema = require("./deleteJobValidationSchema");
const getJobsValidationSchema = require("./getJobsValidationSchema");
const getJobValidationSchema = require("./getJobValidationSchema");
const updateJobValidationSchema = require("./updateJobValidationSchema");

module.exports = {
  createJobValidationSchema,
  getJobsValidationSchema,
  getJobValidationSchema,
  updateJobValidationSchema,
  deleteJobValidationSchema,
};
