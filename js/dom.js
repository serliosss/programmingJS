// 1. Выбор жлементов на страницы
// 1.1 Выбор по ID
const H1 = document.getElementById("title");
console.log(H1);
// 1.2 Выбор ОДНОГО элемента по селектору
const MENU = document.querySelector(".menu"); // выбираем по классу
console.log(MENU);
// 1.3 Выбор НЕСКОЛЬКИХ элементов по селектору
const PARAGRAPHS = document.querySelectorAll("p"); // выбираем ВСЕ параграфы(p) на странице
console.log(PARAGRAPHS); // выводится и работает аналогично массиву
