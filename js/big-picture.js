const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel')

const createComments = (elem) => {
  const commentTemplateElement = document.querySelector('.social__comment');
  const commentElement = commentTemplateElement.cloneNode(true);
  const commentPicture = commentElement.querySelector('.social__picture');
  const commentText = commentElement.querySelector('.social__text');
  commentPicture.src = elem.avatar;
  commentPicture.alt = elem.name;
  commentText.textContent = elem.message;

  return commentElement;
};

const createBigPicture = (elem) => {
  bigPictureImg.src = elem.url;
  likesCount.textContent = elem.likes;
  commentsCount.textContent = elem.comments.length;
  for (let i=0; i < elem.comments.length; i++) {
    socialComments.appendChild(createComments(elem.comments[i]));
  }
  socialCaption.textContent = elem.description;
}

const openModal = (elem) => {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  createBigPicture(elem);
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden')
}

const closeModal = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden')
  bigPictureCancel.removeEventListener('click', closeModal)
}

bigPictureCancel.addEventListener('click', closeModal)


export {openModal};



