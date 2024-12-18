const eventRouter = require("express").Router();

// controllers
const {
  events: {
    getEventsController,
    getEventController,
  },
} = require("../../../controllers");

// validators
const {
  events: {
    getEventsValidationSchema,
    getEventValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

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

module.exports = eventRouter;
