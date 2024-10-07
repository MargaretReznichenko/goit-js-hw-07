//Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.Обов’язково очищай значення
//в інпуті по краях від пробілів.Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".



'use strict';

function thirdTask() {
  const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');
  nameInput.addEventListener('input', event => {
    const text = event.target.value.trim();
    if (text) {
      nameOutput.textContent = text;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });
}

thirdTask();