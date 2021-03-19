import './utils.js';
import './form.js';
import './big-picture.js';
import './picture.js';
import './slider.js';
import './validation.js';
import {getData} from './api.js';
import {generatePhotos} from './picture.js';
import {showError} from './messages.js';
import {closeFrom, setUserFormSubmit} from './form.js';

const onDataSuccess = (data) => {
  generatePhotos(data)
};

const onDataFail = () => {
  showError();
};

setUserFormSubmit(closeFrom);

getData(onDataSuccess, onDataFail)

