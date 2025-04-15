// ЗАДАЧА 1 (4.30)
// Дано трехзначное число. Определить:
// в) Больше ли числа A произведение его цифр
// г) Кратна ли пяти сумма его цифр (числа)
// {
//     let chislo;
//     let a;
//     let countChisloB;
//     chislo = parseInt(prompt("Введите трёхзначное число:"))
//     a = parseInt(prompt("Введите число А:"))

//     // B
//     let one = chislo % 10;
//     let two = Math.floor(chislo/10)%10;
//     let three = Math.floor(chislo/100)%10;
//     countChisloB = (one * two) * three;

//     if (countChisloB > a) {
//         console.log("Произведение цифр заданного числа, больше А и равно = " + countChisloB);
//     } else {
//         console.log("Произведение цифр трехзначного числа НЕ больше А.")
//     }

//     // Г
//     let countChisloG = one + two + three;
//     console.log(countChisloG);
//     if (countChisloG % 5) {
//         console.log("Сумма цифр трехзначного числа " + countChisloG + " -> НЕ кратна 5.")
//     } else {
//         console.log("Сумма цифр трехзначного числа " + countChisloG + " -> кратна 5.")
//     }

// }

// ЗАДАЧА 2 (4.58)
// Дано трехзначное число. Определить:
// а) Входят ли в него цифры 4 или 7.
// б) Входят ли в него цифры 3, 6 или 9.
// {
//     let chislo = parseInt(prompt("Введите трехзначное число:"))
//     let one = chislo % 10;
//     let two = Math.floor(chislo/10)%10;
//     let three = Math.floor(chislo/100)%10;

//     if (one == 4 || one == 7 || two == 4 || two == 7 || three == 4 || three == 7) {
//         console.log("В число " + chislo + " - входят цифры 4 или 7.");
//     }else {
//         console.log("В число " + chislo + " - НЕ входят цифры 4 или 7.");
//     }

//     if (one == 3 || one == 6 || one == 9 ||two == 3 || two == 6 || two == 9 || three == 3 || three == 6 || three == 9) {
//         console.log("В число " + chislo + " - входят цифры 3,6 или 9.");
//     }else {
//         console.log("В число " + chislo + " - НЕ входят цифры 3,6 или 9.");
//     }
// }

// ЗАДАЧА 3 (5.28) 
// Найти:
// а) произведение всех целых чисел от 8 до 15;
// б) произведение всех целых чисел от a до 20 (значение a вводится с клавиатуры; 1 <= a <= 20);
// в) произведение всех целых чисел от 1 до b (значение b вводится с клавиатуры; 1 <= b <= 20);
// г) произведение всех целых чисел от a до b (значения a и b вводятся с клавиатуры; b >= a).
// {
//     // А
//     let a = 1;
//     for (let i = 8; i <= 15; i++){
//         a*=i;
//     }
//     console.log(a);

//     // Б
//     a = parseInt(prompt("Введите число а (при условии: 1 <= а <= 20):"))
//     let countA = 1;
//     if (1 <= a && a <= 20) {
//         for(let i = a; i <= 20; i++) {
//             countA*=i;
//         }
//         console.log(countA);
//     }else {
//         console.log("Не выполнены условия.")
//     }

//     // В
//     b = parseInt(prompt("Введите число b (при условии: 1 <= b <= 20):"));
//     countB = 1;
//     if (1 <= b <= 20) {
//         for(let i = 1; i <= b; i++) {
//             countB *= i;
//         }
//         console.log(countB);
//     }else {
//         console.log("Не выполнены условия");
//     }

//     // Г
//     a = parseInt(prompt("Введите значение числа А: "));
//     b = parseInt(prompt("Введите значение числа B(при условии: b >= a): "));
//     countAB = 1;

//     if (a <= b) {
//         for (let i = a; a <= b; i++) {
//             countAB *= i;
//         }
//         console.log(countAB);
//     }else {
//         console.log("Не выполнены условия")
//     }
// }

// ЗАДАЧА 4 (5.42)
// Известны оценки абитуриента на четырех экзаменах. Определить сумму набранных им баллов.
// {
//     let count1234 = 0;
//     for (let i = 1; i <= 4; i++) {
//         let count = parseInt(prompt("Введите оценку за экзамен " + i + ":"))
//         count1234 += count;
//     }
//     console.log("Сумма набранных баллов: " + count1234)
// }

// ЗАДАЧА 5 (6.49)
// Дано натуральное число. Определить:
// а) Есть ли в нем цифра 3;
// б) Есть ли в нем цифры 2 и 5.
{
    let x = parseInt(prompt("Введите натуральное число: "));

    
}