/* global _:readonly */
import {generatePhotos} from './picture.js';

const RERENDER_DELAY = 500;
const RANDOM_COUNT_PHOTOS = 10;

const imgFilters = document.querySelector('.img-filters');
const imgFiltersFrom = document.querySelector('.img-filters__form');
const buttons = document.querySelectorAll('.img-filters__button');


const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const clearPhotos = () => {
  const previousPhotos = document.querySelectorAll('.picture');
  previousPhotos.forEach(photo => photo.remove());
};

const getRandomPhotos = (photos) => {
  const copyPhotos = photos.slice();
  const randomPhotos = _.shuffle(copyPhotos).slice(RANDOM_COUNT_PHOTOS);
  generatePhotos(randomPhotos.slice(0, RANDOM_COUNT_PHOTOS));
};

const sortPhotosByComments = (photos) => {
  const sortedPhotos = photos.slice().sort((photoA, photoB) => photoB.comments.length - photoA.comments.length);
  generatePhotos(sortedPhotos);
};

const onFilterFormChange = (evt, photos) => {
  if (evt.target.classList.contains('img-filters__button--active') || !evt.target.classList.contains('img-filters__button')) {
    return;
  }

  buttons.forEach(button => button.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');

  switch (evt.target.id) {
    case 'filter-default':
      clearPhotos(photos);
      generatePhotos(photos);
      break;
    case 'filter-random':
      clearPhotos();
      getRandomPhotos(photos)
      break;
    case 'filter-discussed':
      clearPhotos();
      sortPhotosByComments(photos)
      break;
  }
};

const setFilterListener = (data) => {
  imgFiltersFrom.addEventListener('click', _.debounce((evt) => onFilterFormChange(evt, data), RERENDER_DELAY))
};

export {showFilters, setFilterListener};
