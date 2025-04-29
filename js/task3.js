// task 1
const p = document.querySelector(".test-text");
p.innerHTML = "Привет, <b>мир</b>! Меня зовут <i>Сергей!</i>";
p.style.background = "lightblue";
p.style.color = "blue";
p.style.border = "2px blue solid";

// task 2
const email = document.getElementById("email");
email.setAttribute("placeholder", "mail@mail.ru");
email.setAttribute("disabled", "disabled");

const checkbox = document.getElementById("remember");
checkbox.setAttribute("checked", "checked");

const btn = document.getElementById("btn");
btn.setAttribute("value", "Войти");

// task 3
const a = document.createElement("a");
a.innerHTML = "Ссылка на сайт";
a.setAttribute("href", "https://midis.ru");
a.setAttribute("target", "_blank");
a.classList.add("hover");
//a.classList.add("hover:hover"); работает и так, созависимы

const block = document.getElementById("block"); 
block.append(a);

// task 4
const btnStart = document.querySelector(".btn-start");
const ballon = document.querySelector(".ballon-heart");

btnStart.addEventListener("click" , function(){
    ballon.classList.add("fly");
})