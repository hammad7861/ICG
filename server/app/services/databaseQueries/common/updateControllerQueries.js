const updateControllerQueries = {
  async update(Model, _id, data) {
    return Model.findByIdAndUpdate(_id, data, {
      new: true,
      runValidators: true,
    });
  },
};

module.exports = updateControllerQueries;
