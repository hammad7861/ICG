const deleteControllerQueries = {
  async deleteRecord(Model, _id, data = {}) {
    return Model.findByIdAndUpdate(_id, {
      archived: true,
      ...data,
    });
  },
};

module.exports = deleteControllerQueries;
