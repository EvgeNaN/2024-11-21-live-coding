const getMedianData = (numbersList = []) => {
  if (numbersList.length === 0) {
    return {
      median1: null,
      median2: null,
    };
  }

  const bunchSize = Math.floor(numbersList.length / 2);

  const bunch1 = numbersList.slice(0, bunchSize).sort((a, b) => a - b);
  const bunch2 = numbersList.slice(bunchSize, numbersList.length).sort((a, b) => a - b);

  return {
    median1: getMedian(bunch1), // newest data
    median2: getMedian(bunch2), // oldest data
  };
};

const getMedian = numbersList => {
  const middle = numbersList.length / 2;

  if (!Number.isInteger(middle)) {
    return numbersList[Math.floor(middle)];
  }

  const i1 = middle;
  const i2 = i1 - 1;

  return (numbersList[i1] + numbersList[i2]) / 2;
};

module.exports = {
  getMedianData,
};
