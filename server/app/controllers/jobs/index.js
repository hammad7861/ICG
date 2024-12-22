const createJobController = require("./createJobController");
const deleteJobController = require("./deleteJobController");
const getJobController = require("./getJobController");
const getJobsController = require("./getJobsController");
const updateJobController = require("./updateJobController");

module.exports = {
  createJobController,
  getJobsController,
  getJobController,
  updateJobController,
  deleteJobController,
};
