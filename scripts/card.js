import { getElement } from "./utilities.js"
import { getAllElements } from "./utilities.js"

const cards = getAllElements("card")

export function toggleBookmark() {
  cards.forEach((singleCard) => {
    const bookmark = getElement("bookmark", singleCard)
    bookmark.addEventListener("click", () => {
      //far and fas are classes from fontawesome; this toggles between the solid and the outlined bookmark icon
      bookmark.classList.toggle("far")
      bookmark.classList.toggle("fas")
    })

    const answerButton = getElement("answerbutton", singleCard)
    const answer = getElement("answer", singleCard)
    const answerTextShow = getElement("answertextshow", singleCard)
    const answerTextHide = getElement("answertexthide", singleCard)
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden")
      answerTextShow.classList.toggle("hidden")
      answerTextHide.classList.toggle("hidden")
    })
  })
}
