import './utils.js';
import './form.js';
import './big-picture.js';
import './picture.js';
import './slider.js';
import './validation.js';
import {getData, GET_DATA_ERROR_MESSAGE} from './api.js';
import {generatePhotos} from './picture.js';
import { setUserFormSubmit} from './form.js';
import {showAlert} from './utils.js';
import  {showFilters, setFilterListener} from './filters.js';

const onDataSuccess = (data) => {
  generatePhotos(data)
  showFilters();
  setFilterListener(data);
};

const onDataFail = () => {
  showAlert(GET_DATA_ERROR_MESSAGE);
};

setUserFormSubmit();
getData(onDataSuccess, onDataFail);

