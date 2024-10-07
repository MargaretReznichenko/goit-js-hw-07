//Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
//Є input, у який користувач вводить бажану кількість елементів.Після натискання на кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю елементів і очищатися
//значення в інпуті.При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy колекція елементів має очищатися.
//Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
//Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
//Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount. Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.
//1.Розміри першого <div> елемента мають бути 30px на 30px.
//2.Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//3.Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
//Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


'use strict';

function sixthTask() {
  const number = document.querySelector('#controls input');
  const create = document.querySelector('[data-create]');
  const destroy = document.querySelector('[data-destroy]');
  const boxes = document.querySelector('#boxes');

  create.addEventListener('click', () => {
    if (number.value <= 100) {
      destroyBoxes();
      createBoxes(number.value);
    }
  });

  function createBoxes(amount) {
    let htmlBoxes = '';
    for (let i = 1; i <= amount; i++) {
      htmlBoxes += `<div style=
      'width: ${30 + 10 * (i - 1)}px;
      height: ${30 + 10 * (i - 1)}px;
      background-color: ${getRandomHexColor()}'></div>`;
    }
    boxes.insertAdjacentHTML('afterbegin', htmlBoxes);
    number.value = '';
  }

  destroy.addEventListener('click', destroyBoxes);

  function destroyBoxes() {
    boxes.innerHTML = '';
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

sixthTask();