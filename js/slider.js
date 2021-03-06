/* global noUiSlider:readonly */
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectList = document.querySelector('.effects__list');
const effectValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');

const createSlider = (min, max, start, step) => {
  effectLevel.classList.remove('hidden');
  noUiSlider.create(slider, {
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
}

const destroySlider = () => {
  effectLevel.classList.add('hidden');
  slider.noUiSlider.destroy();
};

// eslint-disable-next-line no-unused-vars
const resetSlider = () => {
  effectLevel.classList.add('hidden');
  imgUploadPreview.style.filter = 'none';
  imgUploadPreview.style.transform = '';
}

const applyEffects = (element) => {
  slider.noUiSlider.on('update', (values, handle) => {
    switch (element) {
      case 'chrome':
        imgUploadPreview.style.filter = 'none';
        imgUploadPreview.style.filter = `grayscale(${values[handle]})`;
        break;
      case 'sepia':
        imgUploadPreview.style.filter = 'none';
        imgUploadPreview.style.filter = `sepia(${values[handle]})`;
        break;
      case 'marvin':
        imgUploadPreview.style.filter = 'none';
        imgUploadPreview.style.filter = `invert(${values[handle]})`;
        break;
      case 'phobos':
        imgUploadPreview.style.filter = 'none';
        imgUploadPreview.style.filter = `blur(${values[handle]})`;
        break;
      case 'heat':
        imgUploadPreview.style.filter = 'none';
        imgUploadPreview.style.filter = `brightness(${values[handle]})`;
        break;
      case 'none':
        imgUploadPreview.style.filter = 'none';
        destroySlider()
        break;
    }

    effectValue.value = values[handle];
  });
};

effectList.addEventListener('change', (evt) => {
  if (evt.target.matches('.effects__radio')) {
    if (slider.noUiSlider) {
      destroySlider();
    }

    switch (evt.target.value) {
      case 'chrome':
        createSlider(0, 1, 1, 0.01);
        break;
      case 'sepia':
        createSlider(0, 1, 1, 0.01);
        break;
      case 'marvin':
        createSlider(0, 100, 100, 1);
        break;
      case 'phobos':
        createSlider(0, 3, 3, 0.1);
        break;
      case 'heat':
        createSlider(1, 3, 3, 0.1);
        break;
      case 'none':
        createSlider(0, 1, 1, 0.1);
        break;
    }

    imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    applyEffects(evt.target.value);
  }
})

export {resetSlider};






