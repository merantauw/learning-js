/*
let count = 100;

do {
    console.log(count);
    count++;
}
while (count < 10)*/

/*
console.log('Цикл сейчас начнется...');

let i = 1;

while (i <= 10){
    console.log(i);

    if (i % 5 === 0){
        console.log('Цикл прерван досрочно');
        break;
    }

    i++;
}

console.log('Цикл завершен.');*/

/*console.log('Цикл сейчас начнется...');

for (let i = 0;i <= 10; i++){

    console.log(i);

    if (i === 3){
        console.log('Цикл прерван досрочно');
        break;
    }
}
console.log('Цикл завершен.');*/

console.log('Цикл сейчас начнется...');

for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i);
}

console.log('Цикл завершен.');