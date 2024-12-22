const { Job } = require("../../models");
const {
  common: {
    getAllControllerQueries: { getAll },
  },
} = require("../../services");
const { successResponse, calculateTotalPages } = require("../../utils");

const getJobsController = {
  async getJobs(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      const { records: jobs, count } = await getAll(Job, limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      successResponse(res, 200, "Jobs fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        jobs,
      });
    } catch (error) {
      console.error("ERROR IN GETTING JOBS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getJobsController;
