const SERVER_URL = 'https://22.javascript.pages.academy/kekstagram';
const SENDDATA_ERROR_MESSAGE = 'Не удалось отправить форму. Попробуйте еще раз';
const GETDATA_ERROR_MESSAGE = 'Отсутствует связь с сервером. Попробуйте позже';

const getData = (onSuccess, onFail) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(GETDATA_ERROR_MESSAGE);
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
        onFail(SENDDATA_ERROR_MESSAGE);
      }
    })
    .catch( ()=> {
      onFail(SENDDATA_ERROR_MESSAGE);
    });
};


export {getData, sendData, GETDATA_ERROR_MESSAGE }
