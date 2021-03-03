import {isEscEvent} from './utils.js';
import {resetSlider} from './slider.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const imgOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview');
let scaleControlValue = imageUploadForm.querySelector('.scale__control--value');
const imgUploadScale = document.querySelector('.img-upload__scale');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;
scaleControlValue.value = 100;
let defaultscale;
defaultscale = DEFAULT_SCALE;

const openForm = () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscDown )
  resetSlider()

}

uploadFile.addEventListener('click', openForm)

const onEscDown = (evt) => {
  if(isEscEvent(evt)) {
    closeFrom();
  }
}

const closeFrom = () => {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscDown);
  uploadFile.value = '';
}

uploadCancel.addEventListener('click', closeFrom)

const onScaleControlSmaller = () => {
  if (defaultscale > MIN_SCALE && defaultscale <= MAX_SCALE) {
    defaultscale = defaultscale - SCALE_STEP;
    scaleControlValue.value = `${defaultscale}%`;
    imageUploadPreview.style.transform = `scale(${defaultscale/MAX_SCALE})`;
  }
}

const onScaleControlBigger = () => {
  if (defaultscale >= MIN_SCALE && defaultscale < MAX_SCALE) {
    defaultscale = defaultscale + SCALE_STEP;
    scaleControlValue.value = `${defaultscale}%`;
    imageUploadPreview.style.transform = `scale(${defaultscale/MAX_SCALE})`;
  }
}

imgUploadScale.addEventListener('click', (evt) => {
  if (evt.target.closest('.scale__control--bigger')){
    onScaleControlBigger();
  }
  if (evt.target.closest('.scale__control--smaller')){
    onScaleControlSmaller();
  }
  // eslint-disable-next-line no-console
  console.log(evt.target)
});





