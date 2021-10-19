import { getElement } from './utilities.js'

const questionText = getElement('questionText')
const questionWordText = getElement('questionWordText')
const questionWordCount = getElement('questionWordCount')

questionWordCount.innerText = 7

export function countWord() {
  questionText.addEventListener('input', () => {
    const textLength = questionText.value.match(/(\w+)/g).length //This counts the word in the Questiontextfield
    questionWordCount.innerText = 7 - textLength
    if (textLength.length > 7) {
      questionWordCount.classList.add('hidden')
      questionWordText.classList.add('hidden')
    } else {
      questionWordCount.classList.remove('hidden')
      questionWordText.classList.remove('hidden')
    }
  })
}
