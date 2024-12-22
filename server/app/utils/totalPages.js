const calculateTotalPages = (count, limit) => {
  return Math.ceil(count / limit);
};

module.exports = calculateTotalPages;
