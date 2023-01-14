import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const FORM_DATA = 'feedback-form-state';
const currentValues = {
  email: '',
  message: '',
};
const savedValues = localStorage.getItem(FORM_DATA);

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);
onReload();

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    currentValues.email = evt.target.value;
  } else if (evt.target.name === 'message') {
    currentValues.message = evt.target.value;
  }
  localStorage.setItem(FORM_DATA, JSON.stringify(currentValues));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(currentValues);
  form.reset();
  localStorage.removeItem(FORM_DATA);
}

function onReload() {
  if (savedValues) {
    const parsedValues = JSON.parse(savedValues);
    emailInput.value = parsedValues.email;
    messageInput.value = parsedValues.message;
  }
}
