const SERVER_URL = 'https://22.javascript.pages.academy/kekstagram/';
const ERROR_MESSAGE = 'Не удалось отправить форму. Попробуйте еще раз';

const getData = (onSuccess, onFail) => {
  fetch(`${SERVER_URL}data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(ERROR_MESSAGE);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok){
        onSuccess();
      } else {
        onFail(ERROR_MESSAGE);
      }
    })
    .catch( ()=> {
      onFail(ERROR_MESSAGE);
    });
};


export {getData, sendData }
