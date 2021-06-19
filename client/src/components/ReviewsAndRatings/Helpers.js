const getTotalRatingReviews = (dataRatings) => {
  let totalRatingValues = 0;

  for (const [key, value] of Object.entries(dataRatings)) {
    totalRatingValues += key * value;
  }

  return totalRatingValues;
};

const getTotalNumberReviews = (dataRatings) => {
  let totalNumberReviews = 0;

  for (const [key, value] of Object.entries(dataRatings)) {
    totalNumberReviews += Number(value);
  }

  return totalNumberReviews;
};

module.exports.getTotalRatingReviews = getTotalRatingReviews;
module.exports.getTotalNumberReviews = getTotalNumberReviews;
