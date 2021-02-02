// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

let getRandomNumber = (min, max) => {
  if (min < 0 | max < 0) {
    return alert('Введите число больше 0');
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return alert(Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomNumber(0, 100);


// 2 задание Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна


let getCommmentLength = (validateString, maxLength) => {
  if (validateString.length <= maxLength) {
    return true;
  }
  return false;
}

getCommmentLength();

