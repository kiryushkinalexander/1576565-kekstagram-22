import {isEscEvent} from './utils.js';

const main = document.querySelector('main')
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const showModal = (modal) => {
  const closeModal = () => {
    modal.remove();
    document.removeEventListener('keydown', onDocumentKeyDown);
  };

  const onModalClick = () => closeModal();

  const onDocumentKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      closeModal();
    }
  }

  main.appendChild(modal);
  modal.addEventListener('click', onModalClick);
  document.addEventListener('keydown', onDocumentKeyDown);
};

const showSuccessModal = () => {
  const successModal = successTemplate.cloneNode(true);
  showModal(successModal);
};

const showErrorModal = () => {
  const errorModal = errorTemplate.cloneNode(true);
  showModal(errorModal);
};

export {
  showSuccessModal,
  showErrorModal
};
