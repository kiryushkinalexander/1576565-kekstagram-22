const getRandomNumberInRange = (min, max) => {
  if (min < 0 || max < 0 || max === min) {
    // eslint-disable-next-line no-console
    console.log('Укажите числа больше 0');
    return;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-unused-vars
const validateStringLength = (validateString, maxLength) => {
  return validateString.length <= maxLength;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumberInRange(0, elements.length - 1)]
};

export {
  getRandomNumberInRange,
  validateStringLength,
  getRandomArrayElement
};
