export default function validateForm() {
  const form = document.querySelector('.form');
  const inputs = form.querySelectorAll('.form__input');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    inputs.forEach(input => {
      if (!input.value) {
        console.log('field is blank');
        const error = document.createElement('span');
        error.className = 'error';
        error.innerHTML = 'This field cannot be blank';
        const parentEl = input.parentNode;
        parentEl.insertBefore(error, input.nextSibling);
        input.classList.add('invalid');
      }
    });
  });
}
