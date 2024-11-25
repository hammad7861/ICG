const { ASSET_URL_TYPE } = require("../../constants");
const { Job } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse } = require("../../utils");

const getJobController = {
  async getJob(req, res, next) {
    try {
      const { jobId } = req.sanitizedParams;

      const job = await getOne(Job, jobId);

      if (!job) throw CustomErrorHandler.notFound("Job");

      successResponse(res, 200, "Job fetched", { job });
    } catch (error) {
      console.error("ERROR IN GETTING JOB CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getJobController;
