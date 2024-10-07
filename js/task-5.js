//Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль по кліку на button.change - color і задає це значення кольору текстовим вмістом для span.color.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor().
//Зверни увагу, що функція getRandomHexColor() повертає колір у hex - форматі, в той час як колір фону на < body > буде у форматі rgb.Це нормально й не потребує якихось правок.



'use strict';

function fifthTask() {
  const btn = document.querySelector('.change-color');
  const color = document.querySelector('.color');
  btn.addEventListener('click', event => {
    const random = getRandomHexColor();
    document.body.style.backgroundColor = `${random}`;
    color.textContent = random;
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

fifthTask();




