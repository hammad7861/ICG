const validateInputs = (validationSchema) => {
  return (req, res, next) => {
    const { error: bodyError } = validationSchema.body
      ? validationSchema.body.validate(req.body)
      : {};

    if (bodyError) return next(bodyError);

    const { error: paramsError } = validationSchema.params
      ? validationSchema.params.validate(req.params)
      : {};

    if (paramsError) return next(paramsError);

    const { error: queryError } = validationSchema.query
      ? validationSchema.query.validate(req.query)
      : {};

    if (queryError) return next(queryError);

    const { error: fileError } = validationSchema.file
      ? validationSchema.file.validate(req.file)
      : {};

    if (fileError) return next(fileError);

    next();
  };
};

module.exports = validateInputs;
