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

const validateStringLength = (validateString, maxLength) => {
  return validateString.length <= maxLength;
}

// validateStringLength();


const PHOTOS_ARRAY = 25;

const NAMES = [
  'Робокоп',
  'Василий Уткин',
  'Колобок',
  'Бэтмен',
  'Кама Пуля',
  'Иван Охлобыстин',
  'Дукалис',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Сам себе фотограф',
  'Лучшей фотки вы не найдете нигде',
  'Когда попросил друга сфоткать',
  'Это я',
  'Такое себе фото',
];


const getRandomArrayElement = (elements, min, max) => {
  return elements[getRandomNumberInRange(min, max - 1)]
}

const getImageId = () => {
  return `img/avatar-${getRandomNumberInRange(1, 6)}.svg`
}


const getCommentsArray = () => {
  return {
    id: getRandomNumberInRange(0, 25),
    avatar: getImageId(),
    message: getRandomArrayElement(MESSAGES, 0, 6),
    name: getRandomArrayElement(NAMES, 0, 7),
  }
}

const getObjectArray = () => {
  const objectsArray = [];
  for (let i = 0; i < PHOTOS_ARRAY; i++) {
    const newObject = {
      id: getRandomNumberInRange(0, 25),
      url: `photos/${getRandomNumberInRange(1, 6)}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS, 0, 4),
      likes: getRandomNumberInRange(15, 200),
      comment: getCommentsArray(),
    }
    objectsArray.push(newObject)
  }
  return objectsArray;
}

// eslint-disable-next-line no-console
console.log(getObjectArray());
