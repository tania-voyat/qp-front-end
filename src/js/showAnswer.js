export default function showAnswer() {
  const targetQuestion = document.querySelector('.question-list');
  targetQuestion.addEventListener('click', event => {
    if (event.target.className === 'open-button') {
      event.target.nextElementSibling.classList.toggle('show');
    }
  });
}
