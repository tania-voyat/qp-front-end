import './style.scss';
import toggleMenu from './js/menuToggler';
import showAnswer from './js/showAnswer';
import validateForm from './js/formValidation';
import Splide from '@splidejs/splide';

new Splide('#splide', {
  classes: {
    arrows: 'splide__arrows slider__arrows',
  },
}).mount();

toggleMenu();
showAnswer();
validateForm();
