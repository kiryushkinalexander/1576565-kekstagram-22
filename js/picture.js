import {renderBigPicture} from './big-picture.js';

const pictureListElem = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generatePhotos = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((item) => {
    const pictureElem = pictureTemplate.cloneNode(true);
    pictureElem.querySelector('.picture__img').src = item.url;
    pictureElem.querySelector('.picture__comments').textContent = item.comments.length;
    pictureElem.querySelector('.picture__likes').textContent = item.likes;
    pictureFragment.appendChild(pictureElem);

    pictureElem.addEventListener('click', () => {
      renderBigPicture(item);
    })
  });

  pictureListElem.appendChild(pictureFragment);
};

export {generatePhotos};










