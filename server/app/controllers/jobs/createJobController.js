const { Job } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createJobController = {
  async createJob(req, res, next) {
    try {
      const {
        sanitizedBody: {
          title,
          department,
          location,
          employmentType,
          description,
          scheduled,
          scheduledDate,
          published,
        },
      } = req;

      const jobData = {
        title,
        department,
        location,
        employment_type: employmentType,
        description,
        scheduled,
        scheduled_date: scheduledDate,
        published,
      };

      await create(Job, jobData);

      successResponse(res, 200, "Job created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE JOB CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createJobController;
