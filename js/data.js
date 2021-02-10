import {
  getRandomNumberInRange,
  getRandomArrayElement
} from './utils.js';

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
};

const generatePhoto = (id) => {
  return {
    id: `${id}`,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumberInRange(15, 200),
    comments: getComments(),
  }
};

const photoData = new Array(PHOTOS_ARRAY).fill(null).map((_, id) => generatePhoto(id + 1));
// eslint-disable-next-line no-console
console.log(photoData);
