// import {openModal} from './big-picture.js';
import {generateData} from './data.js';
import {openModal} from './big-picture.js';


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

pictureListElem.addEventListener('click', (evt) => {

  evt.preventDefault()
  const pic = evt.target.closest('a.picture')
  const picId = pic.dataset.id
  const picture = pics.find(item => item.id === picId)

  if (pic) {
    openModal(picture)
  }

})






