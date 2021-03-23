import {generatePhotos} from './picture.js';
import {getData} from './api.js';

const RERENDER_DELAY = 500;
const RANDOM_COUNT_PHOTOS = 10;

const imgFilters = document.querySelector('.img-filters');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

imgFilters.classList.remove('img-filters--inactive');

const clearPhotos = () => {
  const previousPhotos = document.querySelectorAll('.picture');
  previousPhotos.forEach(photo => photo.remove());
}

const getRandomPhotos = (photos) => {
  clearPhotos();

  const randomPhotos = photos.slice().sort(() => Math.random() - 0.5);

  generatePhotos(randomPhotos.slice(0, RANDOM_COUNT_PHOTOS));
};

const sortPhotosByComments = (photos) => {
  clearPhotos();
  const sortedPhotos = photos.sort((photoA, photoB) => {return photoB.comments.length - photoA.comments.length});

  generatePhotos(sortedPhotos);
};

const onChangeActiveClass = (item) => {
  const buttons = document.querySelectorAll('.img-filters__button');

  buttons.forEach((evt) => {
    if (evt.classList.contains('img-filters__button--active')) {
      evt.classList.remove('img-filters__button--active');
    }
  })

  item.classList.add('img-filters__button--active');
};

defaultButton.addEventListener('click', _.debounce((evt) => {
  clearPhotos();
  getData(generatePhotos);
  onChangeActiveClass(evt.target);
}, RERENDER_DELAY));

randomButton.addEventListener('click', _.debounce((evt) => {
  getData(getRandomPhotos);
  onChangeActiveClass(evt.target);
}, RERENDER_DELAY));

discussedButton.addEventListener('click', _.debounce((evt) => {
  getData(sortPhotosByComments);
  onChangeActiveClass(evt.target);
}, RERENDER_DELAY));
