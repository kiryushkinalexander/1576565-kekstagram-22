const textHastags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const RE_HASHTAG = /^#[\wа-яa-z]{1,19}$/i;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_AMOUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const textHashtagsMap = {
  double: 'Хэштеги должны быть разные',
  regex: 'Хэштег должен начинаться с символа \'#\', не может содержать один символ \'#\', может содержать только буквы и числа ',
  size: 'Хэштегов не должно быть больше пяти',
  length: `Длина одного хэштега не может быть больше ${MAX_HASHTAG_LENGTH} символов`,
}

textHastags.addEventListener('input', () => {
  const hashtags = textHastags.value.toLowerCase().split(' ');
  const uniqueHashtags = new Set(hashtags);

  hashtags.forEach((hashtag) => {
    if (hashtag.length > MAX_HASHTAG_LENGTH) {
      textHastags.setCustomValidity(textHashtagsMap.length);
    } else if (hashtags.length >= MAX_HASHTAG_AMOUNT) {
      textHastags.setCustomValidity(textHashtagsMap.size);
    } else if (hashtags.length !== uniqueHashtags.size) {
      textHastags.setCustomValidity(textHashtagsMap.double);
    } else if (!RE_HASHTAG.test(hashtag)) {
      textHastags.setCustomValidity(textHashtagsMap.regex);
    }

    textHastags.reportValidity();
  })
});

textDescription.addEventListener('input', () => {
  const commentLength = textDescription.value.length;
  textDescription.setCustomValidity('');

  if (MAX_COMMENT_LENGTH < commentLength) {
    textDescription.setCustomValidity(`Длина комментария не должная быть больше ${MAX_COMMENT_LENGTH} символов`)
  }
  textDescription.reportValidity();
});



