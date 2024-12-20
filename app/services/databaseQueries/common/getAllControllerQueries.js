const getAllControllerQueries = {
  async getAll(Model, limit, skip, skipFields = "", filter = undefined) {
    const query = { archived: false, ...filter };
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
