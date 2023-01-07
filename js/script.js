"use strict";





//вариант 1 - не верно
//мы не можем это решить

//вариант 2 - верно

//вариант 3 - не верно
// 22+1=23  23 не больше 558 

//вариант 4 - не верно
//ответ будет равен 1

//вариант 5 - не верно
//  так как оба определения true   у нас в выводиться первое true

//вариант 6 - верно





//вариант 1 - ложь   мы не можем знать если 1 ряд точно равен 1

//вариант 2 - истина

//вариант 3 - истина

//вариант 4 -  истина






//задача номер 1


let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}


let num = 0;
do {
	console.log(num);
	num++;
} while (num < 5);


for (let num = 0; num < 5; num++) {
	console.log(num)
}


let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 5) break;
}
console.log(`hi, num = ${num}`);


let num = 0;
for (; num < 5; num++) {
	if (num == 2) continue;
	console.log(num);
}


//задача 2
//не верно       последний результат будет 1


//задача 3

/*
let num = 0;
while (num < 3) {
	(num++)
	console.log(`Число ${num}`)
} 
*/


//задача 4
/*
firstFor:
	for (let num = 0; num < 2; num++) {
		for (let size = 0; size < 3; size++){
			if (size == 1){
				break firstFor;
			}
			console.log(size);
		}
}

*/











//задача 1

/*
let numOne = 1.005 + Number.EPSILON;
let numFour = Math.round(numOne*100) / 100;
console.log(numFour);
*/


//задача 2

/*
let value = parseFloat("150.58px");
console.log(value);
*/


//задача 3
/*
let value = 58 + "Фрилансер";
if (58 + "Фрилансер" !==NaN) {
	console.log('hi')
}
*/


//задача 4
/*
console.log(Math.max(10,58,39,-150,0));
*/


//задача 5
/*
let numThree = Math.floor(58.858);
console.log(numThree);
*/








//задача 1  -   верно

//задача 2
/*
let text = 'Фрилансер';
let firstSymbol = text [5];
console.log(firstSymbol);
*/

//задача 3  -   верно

//задача 4  
/*
let text = 'Фрилансер';
console.log(text.toUpperCase());
*/

//задача 5 
/*
let text = 'Фрилансер';
console.log(text.slice(3,6));
*/

//задача 6 - false 
// чтобы получилось лан надо заменить 4 на 3

