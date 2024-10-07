//З використанням властивостей і методів DOM - елементів, напиши скрипт, який 
//1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item
//2. ДЛя кожного елемента li.item у списку ul#categories знайде і виведе в консоль текст заголовка елемента(тегу < h2 >) і кількість елементів у категорії (усіх < li >, вкладенниху нього). 

'use strict';
function firstTask() {
  const categories = document.querySelector('#categories');
  const categoriesList = categories.children;
  console.log('Number of categories: ', categoriesList.length);
  for (const child of categoriesList) {
    console.log('Category: ', child.firstElementChild.textContent);
    console.log('Elements: ', child.lastElementChild.children.length);
  }
}

firstTask();

