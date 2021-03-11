const textHastags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const RE_HASHTAG = /^#[\wА-Яа-я]{1,19}$/;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_AMOUNT = 5;
const MAX_COMMENT_LENGTH = 140;

textHastags.addEventListener('input', () => {
  const hashtags = textHastags.value.toLowerCase().split(' ');

  const isDuplicateHashtag = () => {
    let duplicates = [];
    let tempArray = [...hashtags].sort();

    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]){
        duplicates.push(tempArray[i]);
        return tempArray[i];
      }
    }
  };

  hashtags.forEach((hashtag) => {
    textHastags.setCustomValidity('');

    if (hashtag.length > MAX_HASHTAG_LENGTH) {
      textHastags.setCustomValidity('Длина одного хэштега не может быть больше ' + MAX_HASHTAG_LENGTH + ' символов');
    } else if (hashtag[0] !== '#') {
      textHastags.setCustomValidity('Хэштег должен начинаться с символа \'#\' ');
    } else if (hashtag.length === 1) {
      textHastags.setCustomValidity('Хэштег не должен содержать один символ \'#\' ');
    } else if (hashtags.length >= MAX_HASHTAG_AMOUNT) {
      textHastags.setCustomValidity('Хэштегов не должно быть больше пяти');
    } else if (isDuplicateHashtag(hashtags)) {
      textHastags.setCustomValidity('Хэштеги должны быть разные');
    } else if (!RE_HASHTAG.test(hashtag.slice(0))) {
      textHastags.setCustomValidity('Хэштег может содержать только буквы и числа');
    }

    textHastags.reportValidity();
  })
});

textDescription.addEventListener('input', () => {
  const commentLength = textDescription.value.length;
  textDescription.setCustomValidity('');

  if (MAX_COMMENT_LENGTH < commentLength) {
    textDescription.setCustomValidity('Длина комментария не должная быть больше ' + MAX_COMMENT_LENGTH + ' символов')
  }
  textDescription.reportValidity();
});



