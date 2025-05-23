//===============================================================================================================================

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

//===============================================================================================================================

// 2. Прочитать или изменить содрежимое тега
console.log(H1.textContent);    // хватит использование этого
console.log(H1.innerHTML);      // хватит использование этого
//console.log(H1.outerHTML);
//console.log(H1.innerText);
//console.log(H1.outerText);

// Изменить содержимое
H1.textContent = "Новый загаловок";
H1.innerHTML = 'Новый заголовок 2 - <i class="bi bi-bug-fill"></i>'; // С использованием потусторонних материалов (Bootstrap или IMG) (c textContent не получится - не воспринимает теги)

//H1.innerHTML=""; // очистисть доску

//===============================================================================================================================

// 3. Работа со стилями (артрибут Style)
H1.style.color = "hotpink";         // изменение цвета
H1.style.fontSize = "46px";     // изменение размера
console.log(H1.style);          // показать какие style

//===============================================================================================================================

// 4. Работа с классами
MENU.classList.add("border");                       // Добавляем класс к элементу

const H2 = document.querySelector(".blue");         // Выделяем элемент по тегу
H2.classList.remove("blue");                        // Удаляем класс
//const H2 = document.querySelector(".blue").classList.remove("blue");    // Возможно и так

console.log(MENU.classList.contains("border"));     // Проверить есть ли такой класс у элемента

//===============================================================================================================================

// 5. Работа с атрибутами (любыми)
const firstLink = document.querySelector(".menu li:first-child a");     // Создание константы с элементом (ссылка первого элемента first-child в menu)
console.log(firstLink.getAttribute("href"));                            // Узнать значение атрибута
firstLink.setAttribute("href", "https://youtube.com");                  // Изменить значение атрибута
firstLink.setAttribute("target", "_blank");
firstLink.removeAttribute("target");                                    // Удалить атрибут


//===============================================================================================================================

// 6. Создание нового элемента на странице
const image = document.createElement("img");    // Создаем (виртуально) элемент
image.setAttribute("src", "img/hkitty.jpg");    // Присваиваем элементу атрибут src
image.classList.add("border");                  // Присваиваем класс "border"
image.style.width = "500px";
image.style.height = "500px";              

const block = document.getElementById("block"); // Создаем (виртуально) элемент 
block.append(image);                            // В элементе создаем элемент "image"
// append - картинка в начало, prepand - картинка в конец
// after - картинка после блока (отдельным), before - картинка перед блоком (отдельным)

//===============================================================================================================================

// 7. Работа с предками
console.log(firstLink.closest("li"));   // Берем ближайшего (для конст) родителя с тегом "li"

//===============================================================================================================================

// 8. Работа с потомками
console.log(document.querySelectorAll("a"));  // Берем все ссылки со страницы
console.log(MENU.querySelectorAll("a"));      // Берем ссылки только из определенного элемента (потомков)

//===============================================================================================================================

// 9. События
const btn = document.getElementById("btn");         // Выделаяем кнопку
const circle = document.querySelector(".circle");   // Выделяем круг

btn.addEventListener("click", function(){ // добавляем к кнопке "слушатель ивентов"
    circle.style.background = "hotpink"; // при нажатии добавлям цвет кругу
})