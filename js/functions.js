function showAnswer() {
  if (event.target.classList.contains("show")) {
    event.target.classList.remove("show");
    event.target.nextElementSibling.classList.remove("card__answer--hidden");
    event.target.innerText = "Hide answer";
  } else {
    event.target.classList.add("show");
    event.target.nextElementSibling.classList.add("card__answer--hidden");
    event.target.innerText = "Show answer";
  }
}
