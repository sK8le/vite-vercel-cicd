import './style.css';
import { lessonsLabel, totalPrice } from './lessons.js';

const PRICE_PER_LESSON = 1500;
const LESSONS = 8;

document.querySelector('#app').innerHTML = `
  <h1>Репетиторы по программированию для детей</h1>
  <p>Курс «Python для начинающих»: ${lessonsLabel(LESSONS)}</p>
  <p>Стоимость: ${totalPrice(PRICE_PER_LESSON, LESSONS).toLocaleString('ru-RU')} ₽</p>
`;
