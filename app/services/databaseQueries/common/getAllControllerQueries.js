const getAllControllerQueries = {
  async getAll(Model, limit, skip, skipFields = "") {
    const query = { archived: false };
    const records = await Model.find(
      query,
      `-archived -createdAt -updatedAt -__v ${skipFields}`
    )
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await Model.countDocuments(query);

    return { records, count };
  },
};

module.exports = getAllControllerQueries;
