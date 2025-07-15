/*
function logHello() {
    const message = 'Привет';
    console.log(message);
}

logHello();

console.log(`${message}, друг!`);*/

/*
{
    const number = 1;
    console.log(number);

    {
        const number = 2;
        console.log(number);

        {
            const number = 3;
            console.log(number);
        }
    }
}

console.log(number);*/


/*
function logMessage(message, count) {
    for (let i = 0; i < count; i++) {
        console.log(message);
    }
}

logMessage('Привет', 2);
logMessage('Пока', 3);*/

/*
const globalMessage = 'Привет';

function logMessage(message, count = 1) {
    const messageFormatted = `(((${message})))`;

    for (let i = 0; i < count; i++) {
        console.log(messageFormatted);
    }
}

logMessage(globalMessage);*/

/*
function sumNumbers(
    num5,
    num1 = 100,
    num2 = 200,
    num3 = 300,
    num4 = 400
) {
 const sum = num1 + num2 + num3 + num4 +num5;
 console.log(`Сумма всех чисел равна: ${sum}`);
}

sumNumbers(500);*/


/*function sum(a, b){
    a + b;
}

console.log(`Сумма a и b равна ${sum(3,7)}`);*/

/*
function getAgeType(age){
    if (typeof age !== 'number'){
        return 'Возраст указан некорректно';
    }

    if (age < 1 || age > 110){
        return 'Такого возраста не может быть';
    }

    if (age < 18){
        return 'Несовершеннолетний';
    }

    return 'Взрослый';
}

console.log(getAgeType('Передаем не числовое значение'));

console.log(getAgeType(129));

console.log(getAgeType(16));

console.log(getAgeType(24));*/

/*
console.log(sum(2,3));

function sum(a, b) {
    return a + b;
}*/

/*
function logMessage(){
    console.log('Привет!');
}

function logMessage(){
    console.log('Пока!');
}

logMessage();*/

//Function Declaration
/*
function logAll(){
    console.log(arguments);
}

logAll('Привет', 555, false);*/


//Function Expression

/*
logHello();
const logHello = function () {
    console.log('Привет!');
}

*/

//Arrow Function

/*
const logHello = () => {
    console.log('Hello!');
}

logHello();*/


/*
const logSum = (a, b) => {
    console.log(arguments);

    console.log(a + b);
}

logSum(1,3);*/


/*
const sum = (a,b) => a + b;

console.log(sum(1,5));*/

/*
function fn1(){
    return 'Я функция 1';
}

const fn2 = function(){
    return 'Я функция 2';
}

const fn3 = () => {
    return 'Я функция 3';
}

console.log(fn1());
console.log(fn2());
console.log(fn3());
*/

/*
const logMessage = (actionBefore, actionAfter) => {
    actionBefore();
    console.log('Привет');
    actionAfter();
}


logMessage(
    () => console.log('before'),
    () => console.log('after')
);*/


/*
const validate = (hasAccess) => hasAccess
    ? () => console.log('Доступ разрешен')
    : () => console.log('Доступ запрещен')

const logMessage = validate(false);

logMessage();*/


/*Глаголы-префиксы для функций:
* get - получить что-то
* set - установить какое-то значение
* create - создать какую-то сущность
* update - обновить какую-то сущность
* delete - удалить какую-то сущность
* show - показать что-то
* hide - скрыть что-то
* search - найти что-то
* calc - вычислить что-то
* check - проверить что-то
* */