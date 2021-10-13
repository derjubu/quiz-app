const bookmark = document.querySelector(".js-bookmark");

bookmark.addEventListener("click", () => {
  //far is the outlined version of the icon, fas is the solid version.
  bookmark.classList.toggle("far");
  bookmark.classList.toggle("fas");
});

const buttonShow = document.querySelector(".js-show");
const questionAnswer = document.querySelector(".js-card-answer");

buttonShow.addEventListener("click", () => {
  questionAnswer.classList.toggle("hidden");
});

const buttonQuestions = document.querySelector(".js-nav-question");
const buttonBookmarks = document.querySelector(".js-nav-bookmarks");
const buttonNewQuestions = document.querySelector(".js-nav-new-questions");
const buttonProfile = document.querySelector(".js-nav-profile");

const pageQuestions = document.querySelector(".js-questions");
const pageBookmarks = document.querySelector(".js-bookmarks");
const pageNewQuestions = document.querySelector(".js-new-questions");
const pageProfile = document.querySelector(".js-profile");

buttonQuestions.addEventListener("click", () => {
  pageQuestions.classList.remove("hidden");
  pageBookmarks.classList.add("hidden");
  pageNewQuestions.classList.add("hidden");
  pageProfile.classList.add("hidden");
  buttonQuestions.classList.add("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonBookmarks.addEventListener("click", () => {
  pageQuestions.classList.add("hidden");
  pageBookmarks.classList.remove("hidden");
  pageNewQuestions.classList.add("hidden");
  pageProfile.classList.add("hidden");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.add("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonNewQuestions.addEventListener("click", () => {
  pageQuestions.classList.add("hidden");
  pageBookmarks.classList.add("hidden");
  pageNewQuestions.classList.remove("hidden");
  pageProfile.classList.add("hidden");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.add("navigation__item--active");
  buttonProfile.classList.remove("navigation__item--active");
});

buttonProfile.addEventListener("click", () => {
  pageQuestions.classList.add("hidden");
  pageBookmarks.classList.add("hidden");
  pageNewQuestions.classList.add("hidden");
  pageProfile.classList.remove("hidden");
  buttonQuestions.classList.remove("navigation__item--active");
  buttonBookmarks.classList.remove("navigation__item--active");
  buttonNewQuestions.classList.remove("navigation__item--active");
  buttonProfile.classList.add("navigation__item--active");
});
