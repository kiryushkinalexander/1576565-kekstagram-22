const ALERT_SHOW_TIME = 5000;

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

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
}
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}



export {
  getRandomNumberInRange,
  validateStringLength,
  getRandomArrayElement,
  isEscEvent,
  showAlert
};
