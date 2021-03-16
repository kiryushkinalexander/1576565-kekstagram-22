import './utils.js';
import './form.js';
import './big-picture.js';
import './picture.js';
import './slider.js';
import './validation.js';
import {getData} from './api.js';
import {generatePhotos} from './picture.js';
import {showAlert} from './utils.js';


// eslint-disable-next-line no-unused-vars
// const pics = generateData();

getData(
  (photos) => {
    generatePhotos(photos);
  },
  () => {
    showAlert()
  },
);

