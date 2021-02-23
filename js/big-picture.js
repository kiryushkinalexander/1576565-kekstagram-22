const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
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

const createBigPicture = (element) => {
  bigPictureImg.src = element.url;
  likesCount.textContent = element.likes;
  commentsCount.textContent = element.comments.size;
  socialCaption.textContent = element.description;
  createComments(element.comments);
}

const openModal = (element) => {
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  createBigPicture(element);
}

const closeModal = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
}

bigPictureCancel.addEventListener('click', closeModal);

export {openModal};



