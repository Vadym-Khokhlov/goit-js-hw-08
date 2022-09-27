import throttle from "lodash.throttle";
import storageFunctions from "./storage";

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector("input"),
};
const LOCAL_STORAGE_KEY = "feedback-form-state";
const dataInput = {
  email: refs.form.elements.email.value,
  message: refs.form.elements.message.value,
};

refs.form.addEventListener("input", throttle(onFormInput, 500)); // need throttle 500ms
refs.form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
  if (storageFunctions.load(LOCAL_STORAGE_KEY) === null) return;
  const message = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(message));
}

// function inputDataChecker() {
//   const savedData = localStorage.getItem("dataInput");
//   if (savedData) {
//     console.log(savedData);
//   }
// }

function onFormSubmit(e) {
  e.preventDefault();
  dataInput[e.currentTarget.name] = e.currentTarget.value;

  console.log(dataInput);
  e.currentTarget.reset();
  storageFunctions.remove(LOCAL_STORAGE_KEY);
}
