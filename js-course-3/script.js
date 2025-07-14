'use strict'
/*
const year = 3000;

const message = year === 2025
    ? 'Начинаю учиться!'
    : year === 3000
        ? 'Нейросети победили'
        : 'Неизвестный год';

console.log(message);*/

/*
false || false  //false: если одно из значений равно true, будет true
true || false //true


const result = '' || false || null || undefined || 0 || 'Привет' || 'Пока';

console.log(result);*/

/*
console.log(false && false); //false
console.log(false && true); //false
console.log(true && false); //false
console.log(true && true); //true
*/

/*
const money = 5;
const cost = 2;
isStoreOpen = true;

const result = (cost < money && isStoreOpen)
    ? `Вот ваше мороженое! \nУ вас осталось ${money - cost} руб`
    : 'Увы, сейчас купить мороженое не получится :(';

console.log(result);*/

/*
const result = 'Привет' && true && 5 && null && 10;
console.log(result);*/

/*
const age = 16;
const isYoung = age < 18;

isYoung && console.log('Вы ещё молодой');*/

/*console.log(Boolean(0));  //false
console.log(Boolean(1)); //true
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true*/

/*
const name = 'Влад';
const age = 27;
const hasMuchMoney = false;
const hasGoodJob = false;
const hasMotivation = true;
const hasFreeTime = true;

if (name !== 'Влад'){
    console.log('Вы не Влад');
} else if(age < 16){
    console.log('Вы ещё слишком молоды для работы');
} else if (!hasMuchMoney || !hasGoodJob || hasMotivation && hasFreeTime){
    console.log('Вам нужно учить фронтенд');
} else{
    console.log('Вам это не нужно. Расслабьтесь');
}*/

const a = 0;
const b = 100;

const result1 = a || b;
const result2 = a ?? b;

console.log(result1);
console.log(result2);