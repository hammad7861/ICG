const { ASSET_URL_TYPE, MEDIA_AND_NEWS_TYPES } = require("../../constants");
const { Job } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse } = require("../../utils");

const updateJobController = {
  async updateJob(req, res, next) {
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
        sanitizedParams: { jobId },
      } = req;

      const job = await getOne(Job, jobId);

      if (!job) throw CustomErrorHandler.notFound("Job");

      const updatePayload = {
        title,
        department,
        location,
        employment_type: employmentType,
        description,
        scheduled,
        ...(scheduled && { scheduled_date: scheduledDate }),
        published,
      };

      console.log(updatePayload);

      const unsetPayload = { ...(!scheduled && { scheduled_date: "" }) };

      console.log(unsetPayload);

      await update(Job, jobId, {
        $set: updatePayload,
        $unset: unsetPayload,
      });

      successResponse(res, 200, "Job updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE ARTCILE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateJobController;
