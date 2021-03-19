import {isEscEvent} from './utils.js';
import {closeFrom} from './form.js';

const errorSection = document.querySelector('#error')
  .content
  .querySelector('.error');
const errorButton = document.querySelector('#error')
  .content
  .querySelector('.error__button');

const successSection = document.querySelector('#success')
  .content
  .querySelector('.success');
const successButton = document.querySelector('#success')
  .content
  .querySelector('.success__button');

const onErrorEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeError();
  }
};

const showError = () => {
  const errorTemplate = document.querySelector('#error').content;
  document.body.appendChild(errorTemplate);
  document.addEventListener('keydown', onErrorEsc);
}

const closeError = () => {
  errorSection.classList.add('hidden');
  document.removeEventListener('keydown', onErrorEsc)
}

errorButton.addEventListener('click', () => {
  onErrorEsc();
})

const onSuccessEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccess();
  }
};

const showSuccess = () => {
  const successTemplate = document.querySelector('#success').content;
  document.body.appendChild(successTemplate);
  document.addEventListener('keydown', onSuccessEsc);
  closeFrom();
};

const closeSuccess = () => {
  successSection.classList.add('hidden');
  document.removeEventListener('keydown', onSuccessEsc);
};

successButton.addEventListener('click', () => {
  closeSuccess()
});

export {showError, showSuccess}
