import {generatePhotos} from './picture.js';

const getData = () => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      generatePhotos(photos);
    });
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok){
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте еще раз');
      }
    })
    .catch( ()=> {
      onFail('Не удалось отправить форму. Попробуйте еще раз');
    });
};

export {getData, sendData }
