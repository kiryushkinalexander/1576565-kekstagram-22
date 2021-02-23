import {openModal} from './big-picture.js';
import {generateData} from './data.js';


const pictureListElem = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createMiniPicture = ({id, url, comments, likes}) => {
  const pictureElem = pictureTemplate.cloneNode(true);

  pictureElem.dataset.id = id;
  pictureElem.querySelector('.picture__img').src = url;
  pictureElem.querySelector('.picture__comments').textContent = comments.length;
  pictureElem.querySelector('.picture__likes').textContent = likes;
  pictureElem.addEventListener('click', () => {
    openModal({id, url, likes, comments});
  });

  return pictureElem;
}

const createMiniPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach((item) => {
    pictureFragment.appendChild(createMiniPicture(item));

  });

  return pictureFragment
};

const pics = generateData();
const miniPictures = createMiniPictures(pics);

pictureListElem.appendChild(miniPictures);


