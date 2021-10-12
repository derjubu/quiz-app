const bookmark = document.querySelector(".js-bookmark");

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("far");
  bookmark.classList.toggle("fas");
});

const buttonShow = document.querySelector(".js-show");
const questionAnswer = document.querySelector(".js-card-answer");

buttonShow.addEventListener("click", () => {
  questionAnswer.classList.toggle("hide");
});

const buttonQuestions = document.querySelector(".js-nav-question");
const buttonBookmarks = document.querySelector(".js-nav-bookmarks");
const buttonNewQuestions = document.querySelector(".js-nav-new-questions");
const buttonProfile = document.querySelector(".js-nav-profile");

const contentQuestions = document.querySelector(".js-questions");
const contentBookmarks = document.querySelector(".js-bookmarks");
const contentNewQuestions = document.querySelector(".js-new-questions");
const contentProfile = document.querySelector(".js-profile");

buttonQuestions.addEventListener("click", () => {
  contentQuestions.classList.remove("hide");
  contentBookmarks.classList.add("hide");
  contentNewQuestions.classList.add("hide");
  contentProfile.classList.add("hide");
  buttonQuestions.classList.add("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonBookmarks.addEventListener("click", () => {
  contentQuestions.classList.add("hide");
  contentBookmarks.classList.remove("hide");
  contentNewQuestions.classList.add("hide");
  contentProfile.classList.add("hide");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.add("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonNewQuestions.addEventListener("click", () => {
  contentQuestions.classList.add("hide");
  contentBookmarks.classList.add("hide");
  contentNewQuestions.classList.remove("hide");
  contentProfile.classList.add("hide");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.add("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonProfile.addEventListener("click", () => {
  contentQuestions.classList.add("hide");
  contentBookmarks.classList.add("hide");
  contentNewQuestions.classList.add("hide");
  contentProfile.classList.remove("hide");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.add("navigation__item--active");
});
