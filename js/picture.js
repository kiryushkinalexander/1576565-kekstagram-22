import {openModal} from './big-picture.js';
import {generateData} from './data.js';


const pictureListElem = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureFragment = document.createDocumentFragment();
const pics = generateData();

const picturesContent = () => {

  pics.forEach(({url, likes, comments}) => {

    const pictureElem = pictureTemplate.cloneNode(true);

    pictureElem.querySelector('.picture__img').src = url;
    pictureElem.querySelector('.picture__comments').textContent = comments.length;
    pictureElem.querySelector('.picture__likes').textContent = likes;
    pictureFragment.appendChild(pictureElem);
    pictureElem.addEventListener('click', openModal({url, likes, comments}));

    return pictureElem;

  });
};

picturesContent();

pictureListElem.appendChild(pictureFragment);


