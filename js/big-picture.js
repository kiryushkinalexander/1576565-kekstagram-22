import {isEscEvent} from './utils.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const LOADED_COMMENTS = 5;

const photo = {
  comments: [],
  nextComment: 0,
}

const createComment = (elem) => {
  const commentElement = socialComments.querySelector('.social__comment').cloneNode(true);
  const commentPicture = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');

  commentPicture.src = elem.avatar;
  commentPicture.alt = elem.name;
  commentText.textContent = elem.message;
  return commentElement;
};

const createComments = () => {
  const socialComment = document.createDocumentFragment();
  photo.comments.slice(photo.nextComment, photo.nextComment + 5).forEach((item) => {
    socialComment.appendChild(createComment(item));
  })

  socialComments.textContent = '';
  socialComments.appendChild(socialComment);

  photo.nextComment += LOADED_COMMENTS;

  if (photo.nextComment >= photo.comments.length) {
    commentsLoader.classList.add('hidden');
    photo.nextComment = 0;
  }
  if (photo.nextComment) {
    socialCommentsCount.childNodes[0].nodeValue = `${photo.nextComment} из `
  }
  else {
    socialCommentsCount.childNodes[0].nodeValue = `${photo.comments.length} из `
  }
};

const renderBigPicture = (element) => {
  openModal(element);
  bigPictureImg.src = element.url;
  likesCount.textContent = element.likes;
  commentsCount.textContent = element.comments.length;
  socialCaption.textContent = element.description;
  if (commentsLoader.classList.contains('hidden')) {
    commentsLoader.classList.remove('hidden');
  }

  photo.comments = element.comments
  createComments(element);


  commentsLoader.addEventListener('click', () => {
    createComments();
  })
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



