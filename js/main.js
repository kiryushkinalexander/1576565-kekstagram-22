'use strict'

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
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumberInRange(0, elements.length - 1)]
}

const getComments = () => {
  const commentsArray = [];

  for (let i = 0; i < 10; i++) {
    commentsArray.push({
      id: i + 1,
      avatar: `img/avatar-${getRandomNumberInRange(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    })
  }

  return commentsArray;
}
// eslint-disable-next-line no-console
console.log(getComments())

const generatePhoto = (item, id) => {
  return {
    id: `${id}`,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumberInRange(15, 200),
    comments: getComments(),
  }
}

// eslint-disable-next-line no-console
console.log(generatePhoto())

const photoData = new Array(PHOTOS_ARRAY).fill(null).map((item, id) => generatePhoto(item, id + 1))
// eslint-disable-next-line no-console
console.log(photoData)
