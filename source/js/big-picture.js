import {isEscEvent} from './utils.js';

const MAX_COMMENTS_AMOUNT = 5;
let commentsData = [];
let currentCommentsLength;
let shownCommentsCount;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsShown = bigPicture.querySelector('.comments-shown');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentTemplate = socialComments.querySelector('.social__comment');


const createComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentPicture = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentPicture.src = avatar;
  commentPicture.alt = name;
  commentText.textContent = message;

  return commentElement;
};

const createCommentsFragment = (commentsData) => {
  const fragment = document.createDocumentFragment();

  commentsData.forEach((comment) => {
    const newComment = createComment(comment);
    fragment.appendChild(newComment);
  })

  return fragment;
};

const onCommentsLoaderClick = () => {
  createComments(commentsData);
  shownCommentsCount += MAX_COMMENTS_AMOUNT;

  if (shownCommentsCount >= currentCommentsLength) {
    shownCommentsCount = currentCommentsLength;
  }

  commentsShown.textContent = shownCommentsCount;

  if (commentsData.length === 0) {
    commentsLoader.classList.add('hidden');
  }
}

const createComments = (commentsData) => {
  const shownComments = commentsData.splice(0, MAX_COMMENTS_AMOUNT);
  const commentsFragment = createCommentsFragment(shownComments);

  socialComments.appendChild(commentsFragment);
}
const renderBigPicture = ({url, description, comments, likes}) => {
  openModal();
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = currentCommentsLength = comments.length;
  socialCaption.textContent = description;
  commentsData = comments.slice()

  if (comments.length > MAX_COMMENTS_AMOUNT) {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onCommentsLoaderClick)
  } else {
    commentsLoader.classList.add('hidden')
  }

  shownCommentsCount = commentsData.length > MAX_COMMENTS_AMOUNT ? MAX_COMMENTS_AMOUNT : commentsData.length;
  commentsShown.textContent = shownCommentsCount;
  socialComments.innerHTML = '';
  createComments(commentsData);
};

const openModal = () => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
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



