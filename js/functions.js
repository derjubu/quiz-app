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

function bookmark() {
  if (event.target.classList.contains("far")) {
    event.target.classList.remove("far");
    event.target.classList.add("fas");
  } else {
    event.target.classList.add("far");
    event.target.classList.remove("fas");
  }
}