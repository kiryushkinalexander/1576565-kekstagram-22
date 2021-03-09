import {isEscEvent} from './utils.js';

const textHastags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const regular = /^[A-Za-zА-яа-я0-9]+$/;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_AMOUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const onEscDown = (evt) => {
  if(isEscEvent(evt)) {
    evt.stopPropagation();
  }
}

textHastags.addEventListener('input', () => {
  const hashtags = textHastags.value.toLowerCase().split(' ');

  hashtags.forEach((hashtag, index) => {
    textHastags.setCustomValidity('');

    if (hashtag.length > MAX_HASHTAG_LENGTH) {
      textHastags.setCustomValidity('Длина одно хэштега не может быть больше ' + MAX_HASHTAG_LENGTH + ' символов');
    } else if (hashtag[0] !== '#') {
      textHastags.setCustomValidity('Хэштег должен начинаться с символа \'#\' ');
    } else if (hashtag.length === 1) {
      textHastags.setCustomValidity('Хэштег не должен содержать один символ \'#\' ');
    } else if (hashtags.length >= MAX_HASHTAG_AMOUNT) {
      textHastags.setCustomValidity('Хэштегов не должно быть больше пяти');
    } else if (hashtags[index - 1] === hashtags[index]) {
      textHastags.setCustomValidity('Хэштеги должны быть разные');
    }
    textHastags.reportValidity();
  })
});

textDescription.addEventListener('input', () => {
  const commentLength = textDescription.value.length;
  textDescription.setCustomValidity('');

  if (MAX_COMMENT_LENGTH < commentLength) {
    textDescription.setCustomValidity('Длина комментария не должная быть больше 140 символов')
  }
  textDescription.reportValidity();
});

textHastags.addEventListener('keydown', onEscDown);
textDescription.addEventListener('keydown', onEscDown);


