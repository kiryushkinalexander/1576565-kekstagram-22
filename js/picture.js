// import {generateData} from './data.js';
import {renderBigPicture} from './big-picture.js';

const pictureListElem = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generatePhotos = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((item) => {
    // pictureFragment.appendChild(createMiniPicture(item));
    const pictureElem = pictureTemplate.cloneNode(true);
    // pictureElem.dataset.id = item.id;
    pictureElem.querySelector('.picture__img').src = item.url;
    pictureElem.querySelector('.picture__comments').textContent = item.comments.length;
    pictureElem.querySelector('.picture__likes').textContent = item.likes;
    pictureFragment.appendChild(pictureElem);

    pictureElem.addEventListener('click', () => {
      renderBigPicture(item);
    })

  });
  pictureListElem.appendChild(pictureFragment);
}

export {generatePhotos};










