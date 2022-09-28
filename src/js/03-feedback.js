import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  feedback: document.querySelector('textarea'),
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';

dataLoader();
refs.form.addEventListener('input', throttle(dataSaver, 500)); // need throttle 500ms
refs.form.addEventListener('submit', formSubmitter);

function dataSaver() {
  const dataInput = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataInput));
}

function dataLoader() {
  const dataLoad = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  refs.email.value = dataLoad?.email || '';
  refs.feedback.value = dataLoad?.message || '';
}

function formSubmitter(e) {
  e.preventDefault();
  const dataLoad = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(dataLoad);
  refs.form.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
