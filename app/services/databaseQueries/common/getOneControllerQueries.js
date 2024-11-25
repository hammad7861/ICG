const getOneControllerQueries = {
  async getOne(Model, _id, skipFields = "") {
    return Model.findOne(
      { _id, archived: false },
      `-archived -createdAt -updatedAt -__v ${skipFields}`
    );
  },
};

module.exports = getOneControllerQueries;
