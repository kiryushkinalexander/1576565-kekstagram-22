const uploadInput = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const FILES_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILES_TYPES.some((it) => {
    return fileName.endsWith(it);
  })

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imgUploadPreview.childNodes[1].src = reader.result;
    });

    reader.readAsDataURL(file);
  }
})
