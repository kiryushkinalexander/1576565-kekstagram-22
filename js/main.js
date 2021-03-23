import './utils.js';
import './form.js';
import './big-picture.js';
import './picture.js';
import './slider.js';
import './validation.js';
import {getData, GETDATA_ERROR_MESSAGE} from './api.js';
import {generatePhotos} from './picture.js';
// import {showError} from './messages.js';
import { setUserFormSubmit} from './form.js';
import {showAlert} from './utils.js';
import './filters.js'


const onDataSuccess = (data) => {
  generatePhotos(data)
};

const onDataFail = () => {
  // eslint-disable-next-line no-undef
  showAlert(GETDATA_ERROR_MESSAGE);
};

setUserFormSubmit();
getData(onDataSuccess, onDataFail);

