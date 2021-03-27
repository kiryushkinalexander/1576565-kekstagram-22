const SERVER_URL = 'https://22.javascript.pages.academy/kekstagram';
const SEND_DATA_ERROR_MESSAGE = 'Не удалось отправить форму. Попробуйте еще раз';
const GET_DATA_ERROR_MESSAGE = 'Отсутствует связь с сервером. Попробуйте позже';

const getData = (onSuccess, onFail) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail(GET_DATA_ERROR_MESSAGE);
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
        onFail(SEND_DATA_ERROR_MESSAGE);
      }
    })
    .catch( ()=> {
      onFail(SEND_DATA_ERROR_MESSAGE);
    });
};

export {
  getData,
  sendData,
  GET_DATA_ERROR_MESSAGE
};
