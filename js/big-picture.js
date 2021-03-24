import {isEscEvent} from './utils.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const createComment = (elem) => {
  const commentElement = socialComments.querySelector('.social__comment').cloneNode(true);
  const commentPicture = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentPicture.src = elem.avatar;
  commentPicture.alt = elem.name;
  commentText.textContent = elem.message;

  return commentElement;
};

const createComments = (commentsData) => {
  const socialComment = document.createDocumentFragment();

  commentsData.forEach((item) => {
    socialComment.appendChild(createComment(item));
  });

  socialComments.appendChild(socialComment);
};

const renderBigPicture = (element) => {
  openModal(element);
  bigPictureImg.src = element.url;
  likesCount.textContent = element.likes;
  commentsCount.textContent = element.comments.length;
  socialCaption.textContent = element.description;
  createComments(element.comments);
};

const openModal = () => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscDown)
};

const onEscDown = (evt) => {
  if (isEscEvent(evt)) {
    closeModal();
  }
};

const closeModal = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscDown)
};

bigPictureCancel.addEventListener('click', () => {
  document.removeEventListener('keydown', onEscDown);
  closeModal();
});

export {openModal, renderBigPicture};



