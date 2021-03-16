// import {generateData} from './data.js';
import {renderBigPicture} from './big-picture.js';

const pictureListElem = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


// const generatePhotos = (photos) => {
//   const createMiniPicture = ({id, url, comments, likes}) => {
//     const pictureElem = pictureTemplate.cloneNode(true);
//
//     pictureElem.dataset.id = id;
//     pictureElem.querySelector('.picture__img').src = url;
//     pictureElem.querySelector('.picture__comments').textContent = comments.length;
//     pictureElem.querySelector('.picture__likes').textContent = likes;
//
//     return pictureElem;
//   }
//
//
//   const createMiniPictures = (pictures) => {
//     const pictureFragment = document.createDocumentFragment();
//
//     pictures.forEach((item) => {
//       pictureFragment.appendChild(createMiniPicture(item));
//
//     });
//
//     return pictureFragment
//   };
//
//
//   const miniPictures = createMiniPictures(photos);
//
//   pictureListElem.appendChild(miniPictures);
// }






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
    // eslint-disable-next-line no-console
    console.log(typeof item.id)
    pictureElem.addEventListener('click', () => {
      renderBigPicture(item);
      // eslint-disable-next-line no-console
      console.log(item, item.id)
    })

  });
  pictureListElem.appendChild(pictureFragment);
}

// pictureListElem.addEventListener('click', (evt) => {
//   if(evt.target.closest('a.picture')){
//     evt.preventDefault()
//     const pic = evt.target.closest('a.picture')
//     const picId = pic.dataset.id
//     const picture = photos.find(item => item.id === picId)
//     renderBigPicture(pic);
//     // eslint-disable-next-line no-console
//     console.log(picture)
//   }
// })

// let photos = [];
// pictureListElem.addEventListener('click', (evt) => {
//   evt.preventDefault()
//   const pic = evt.target.closest('a.picture')
//   const picId = pic.dataset.id
//   const picture = photos.find(item => item.id === picId)
//
//   if(evt.target.closest('a.picture')){
//
//     renderBigPicture();
//     // eslint-disable-next-line no-console
//     console.log(picId, picture)
//   }
// })

export {generatePhotos};










