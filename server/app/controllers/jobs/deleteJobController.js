const { Job } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse } = require("../../utils");

const deleteJobController = {
  async deleteJob(req, res, next) {
    try {
      const {
        sanitizedParams: { jobId },
      } = req;

      const article = await getOne(Job, jobId);

      if (!article) throw CustomErrorHandler.notFound("Job");

      await deleteRecord(Job, jobId);

      successResponse(res, 200, "Job deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE JOB CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteJobController;
