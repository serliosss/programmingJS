/* Нахождение минимума среди двух чисел */
let x,y,min;
x = parseInt(prompt("Ввеидте первое число"));
y = parseInt(prompt("Ввеидте второе число"));

if(x>y){
    min = y;
} else {
    min = x;
}

alert("min =  " + min);