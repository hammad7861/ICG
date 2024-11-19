const createControllerQueries = {
  async create(Model, data) {
    return Model.create(data);
  },
};

module.exports = createControllerQueries;
