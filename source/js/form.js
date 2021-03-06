import {isEscEvent} from './utils.js';
import {resetSlider} from './slider.js';
import {showSuccessModal, showErrorModal} from './messages.js';
import {sendData} from './api.js';

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imgOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadPreview = imgOverlay.querySelector('.img-upload__preview img');
const scaleControlValue = imgOverlay.querySelector('.scale__control--value');
const scaleControlBigger = imgOverlay.querySelector('.scale__control--bigger');
const scaleControlSmaller = imgOverlay.querySelector('.scale__control--smaller');
const textHastags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
scaleControlValue.value = MAX_SCALE;
let currentScale = DEFAULT_SCALE;

const resetScale = () => {
  scaleControlValue.value = `${DEFAULT_SCALE}%`;
  currentScale = DEFAULT_SCALE;
};

const resetHashtags = () => {
  textHastags.setCustomValidity('');
  textDescription.setCustomValidity('')
  textHastags.value = '';
  textDescription.value = '';
};

const openForm = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscDown);
  resetSlider();
  resetScale();
  resetHashtags();
};

const onEscDown = (evt) => {
  if(isEscEvent(evt)) {
    if (textHastags !== document.activeElement && textDescription !== document.activeElement){
      onFormCloseClick();
    }
  }
};

const onFormCloseClick = () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscDown);
  uploadFile.value = '';
};

const onScaleControlSmaller = () => {
  if (currentScale > MIN_SCALE && currentScale <= MAX_SCALE) {
    currentScale = currentScale - SCALE_STEP;
    scaleControlValue.value = `${currentScale}%`;
    imageUploadPreview.style.transform = `scale(${currentScale / MAX_SCALE})`;
  }
};

const onScaleControlBigger = () => {
  if (currentScale >= MIN_SCALE && currentScale < MAX_SCALE) {
    currentScale = currentScale + SCALE_STEP;
    scaleControlValue.value = `${currentScale}%`;
    imageUploadPreview.style.transform = `scale(${currentScale / MAX_SCALE})`;
  }
};

const onSendDataSuccess = () => {
  showSuccessModal();
  onFormCloseClick();
};

const onSendDataError = () => {
  showErrorModal();
  onFormCloseClick();
};

const setUserFormSubmit = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSendDataSuccess,
      onSendDataError,
      new FormData(evt.target),
    );
  });
};


uploadCancel.addEventListener('click', onFormCloseClick);
scaleControlBigger.addEventListener('click', onScaleControlBigger);
scaleControlSmaller.addEventListener('click', onScaleControlSmaller);

export {
  setUserFormSubmit,
  onFormCloseClick,
  openForm
};




