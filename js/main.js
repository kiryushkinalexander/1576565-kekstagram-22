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

getRandomNumberInRange(0, 100);


const validateStringLength = (validateString, maxLength) => {
  return validateString.length <= maxLength;
}

validateStringLength();
