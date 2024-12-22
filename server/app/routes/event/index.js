const path = require("path");
const eventRouter = require("express").Router();

// controllers
const {
  events: {
    createEventController,
    getEventsController,
    getEventController,
    updateEventController,
    deleteEventController,
  },
} = require("../../controllers");

// validators
const {
  events: {
    createEventValidationSchema,
    getEventsValidationSchema,
    getEventValidationSchema,
    updateEventValidationSchema,
    deleteEventValidationSchema,
  },
} = require("../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../middlewares");
const createMulterConfig = require("../../config/multerConfig");
const uploadPaths = {
  bannerImage: path.resolve("assets/images/events/banners"),
};
const eventUpload = createMulterConfig(uploadPaths);

// routes
eventRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getEventsValidationSchema),
    sanitizeInputs(),
  ],
  getEventsController.getEvents
);

eventRouter.get(
  "/:eventId",
  [validateInputs(getEventValidationSchema), sanitizeInputs()],
  getEventController.getEvent
);

eventRouter.put(
  "/:eventId",
  eventUpload.single("bannerImage"),
  [validateInputs(updateEventValidationSchema), sanitizeInputs()],
  updateEventController.updateEvent
);

eventRouter.post(
  "/",
  eventUpload.single("bannerImage"),
  [validateInputs(createEventValidationSchema), sanitizeInputs()],
  createEventController.createEvent
);

eventRouter.delete(
  "/:eventId",
  [validateInputs(deleteEventValidationSchema), sanitizeInputs()],
  deleteEventController.deleteEvent
);

module.exports = eventRouter;
