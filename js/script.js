"use strect"
console.log( alert(`Спроби опанувати js продовжуються. 3, 4, 5 частини д/з у файлику js`) );
// Завдання 1 Оператори
// Який або які із варіантів невірні

// варіант 1
console.log( '35' +  -"22" );
// Повинен повернути 13

// варіант 2
console.log( '35' * '22' );
// Повинен повернути 770
// let result = !"";
// console.log( Boolean( result ) );

// let result = 0 || 6;
// console.log( Boolean( result ) );

// let result = 5 && 1;
// console.log( Boolean( result ) );

// console.log( '558' > 22++ );
// Повинно повернути true

let usersCounter = 0;
let newUsers = usersCounter++;
console.log( newUsers );
// Повинно повернути 1

console.log( !false && 11 || 18 || '' );
// Повинно повернути 18

let name = 0;
console.log( name ?? "Без імені" );

// Завдання 2  Ввітвлення

// Який або які із варіантів невірні
//  Повинна показатись істина
if ( 1 === "1" ) {
	console.log( 'Іcтина' );
} else {
	console.log( 'Брехня' );
}

if ( 5 == "5" ) {
	console.log( 'Іcтина' );
} else {
	console.log( 'Брехня' );
}

let message = ( 92 > '11' && 58 < 100 ) ? 'Істина' : 'Брехня';
console.log( message );

if ( 0 ) {
	console.log( 'Брехня' );
} else if (" ") {
	console.log( 'Іcтина' );
}

// Задача - відтворити цифри в консолі від 0 - 5 всіма способами
// Задача 1
let num = 0;
while ( num < 5 ) {
	console.log( num );
	num++;
}

let nur = 5;
while ( nur ) {
	console.log( nur );
	nur--;
}

let nup = 5;
while ( nup ) console.log( nup-- ); // Коротший запис попереднього запису

let rut = 0;
do {
	console.log( rut );
	rut++;
} while ( rut < 5 );

for ( let nuk = 0; nuk < 5; nuk++ ) {
	console.log( nuk );
}

let nut = 0;
for ( ; nut < 5; nut++ ) {
	console.log( nut );
}

// Директива break
let nuy = 0;
for ( ; nuy < 2; nuy++ ){
	console.log( nuy );
	if ( nuy == 2 ) break;
}
console.log( `Робота закінчена,  nuy = ${num}` );

let up = 0;
for ( ; up < 5; up++ ){
	if ( up == 2 ) continue;
	console.log( up );
}

// Задача 2

let nuq = 8;
while ( nuq ) {	
	console.log( nuq );
	nuq--;
	// Задача - остання цифра повинна бути 0
}
/*
Дану задаче неможлио виконати, якщо змінна буде дорівнювати 0, то її булеве значення буде false і тіло циклу не буде виконуватись
*/

// Задача 3
// Переписати на while
/*
for (let mun = 0; mun < 3; mun++){
	console.log(`Число: ${mun}`)
}
*/
let mun = 0;
while ( mun < 5 ) {
	console.log( `Число: ${mun}` );
	mun++;
}

// Задача 4
// Завершити роботу цикла №1, коли size дорівнює 1
/*
   Цикл №1
	for (let varOne = 0; varOne < 2; varOne++){
	      Цикл №2
			for (let size = 0; size < 3; size++){
			console.log (size);
			}
	}
*/
firstStop: for (let varOne = 0; varOne < 2; varOne++){
	for (let size = 0; size < 3; size++){
		if ( size == 1 ) {
			break firstStop
		}
      console.log (size);
	}
}

//===========
// Числа в js

// Задача №1
// Отримати вірне значення, округливши його

let numOne = Math.round( (1.005 + Number.EPSILON) * 100 ) / 100;
console.log( numOne ); // Щоб округлити змінну до 1.01, то потрібно додати до похідного числа Number.EPSILON;

// Задача №2
// Отримати число 135.58 із рядка

let value = "135.58";
let someValue = parseFloat( value );
console.log( someValue );

// Задача №3
// Побудувати вірну умову вітвлення

let someVar = 58 + "Фрілансер";
if (isNaN(someVar)) {
	console.log( `Результат вираження NaN` );
}

// Задача №4
// Знайти максимальне число із 10, 58, 39,-150,0
console.log( Math.max( 10, 58, 39, -150, 0 ) );

// Задача №5
// Округлити число 58.858 до числа 58
let someValueTwo = 58.858;
console.log( Math.floor( someValueTwo ) );


// ==========================
// Масиви в javascript - переплутав відео=)
// ==========================

/*
// Видаляємо елемент 
let arrOne = ['Ваня', 'Паша', 'Оля',];
// Починаючт з першої позиції (в даному випадку це буде Паша) видаляємо один елемнт
arrOne.splice( 1, 1 );
console.log( arrOne );

// Видадяємо обʼєкт і повертаємо його в змінну
let arrTwo = ['Ваня', 'Паша', 'Оля',];
let removed = arrTwo.splice( 1, 1 );
console.log( removed );

// Заміна елементу
let arrThree = ['Ваня', 'Паша', 'Оля',];
// Починаємо з 0 (нульвої) позиції (Ваня), заміняючт один елемент
arrThree.splice( 0, 1, 'Валєра' );
console.log( arrThree );

// Додати елемент до масиву
let arrFour = ['Оля', 'Ваня', 'Паша',];
// Починаємо з першої позиції (перед 'Ваня')
arrFour.splice( 1, 0, 'Маша', 'Коля' );
console.log( arrFour );
console.log( arrFour.langht );

// Видалаємо елементи
let arrFive = ['Оля', 'Ваня', 'Паша',];
//  Починаючи з останньої позиції (Паша), видаляємо один елемент
arrFive.splice( -1, 1 );
console.log( arrFive );

// Копіюємот частину масиву, створюючи новий масив, в який копіюємо частину або весь массив
// Синтаксис arr.splie([start], [end])
let arrSix = ['Оля', 'Ваня', 'Паша',];

// Починаючи з 1-ї позиції 'Ваня', до другої позиції 'Паша' (не включаючи її)
let arrSeven = arrSix.slice( 1, 2 );
console.log( arrSeven );


// Починаючи з передостанньої позиції 'Ваня', до другої позиції 'Оля' (не включаючи її)
let arrEight = arrSix.splice( -2, -1 );
console.log( arrEight );

// Копіюємо весь масив(робимо дубль)
let arrNine = arrSix.splice();
console.log( arrNine );


// Метод concat - робить дубль масиву і може додати ще одне значення

let arOn = ['Оля', 'Ваня', 'Паша',];
let arTw = arOn.concat( 'Саша' );
console.log( arTw );


// Метод split, join
//splin - перетворює строку в масив
// join  - перетворює масив у строку
let sts = 'Алла, Петя, Маша';
let ar = sts.split( ',', 1 ); // - є можливість обмежити кількість
console.log( ar );

// Методи reduce/reduceRight

// Задача 1

let bar = ['Оля', 'Ваня', 'Паша',];
let newBar = bar;
newBar.push( 'Петя' );
console.log( bar.length );*/

//===============
// Строки
//===============

// Задача 1
let fls = "фрілансер";
let text = 'Привіт! Я ${fls}';
console.log( text );
// Бажаний результат не буде отриманий тому, що потрібні зворотні лапки

// Задача 2
let tex = 'фрілансер';
let texSimble = tex[5];
console.log( texSimble );

// Задача 3
let textOne = 123 + "456";
// Очікується 579
console.log( textOne );
// Бажаний результат не буде отримано. отримаємо 123456 тому, що 456 - це рядковий тип даних. Оператор додвання - єдиний оператор, який не змінює тип даних

// Задача 4 - Получити рядок у верхньому регістрі
let textTwo = 'фрілансер'; 
console.log( textTwo.toUpperCase() );

// Задача 5 - Получити підстроку "лан" із:
let textThree = 'фрілансер';
console.log(textThree.slice(3, 6));

// Задача 6 - true чи false?
let textFour = 'фрілансер';
console.log( textFour.includes( 'лан', 4 ) );
// Отриманий результат FALSE - тому що за даним умовами, ми починаємо шукати лан із 4 позиції. Щоб було TRUE, потрібно починати пошук із третьої позиції в даному випадку


/*
function someSume ( a, b ) {
	return a * b;
}
console.log( `Сума: ${someSume(4,7)}` );
*/