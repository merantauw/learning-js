/*alert('Привет 1');
console.log('Привет 2');
alert('Привет 3');
console.log('Привет 4');*/

/*
const userAge = prompt('Сколько тебе лет?', '18');

if (userAge < 18){
    alert('Доступ запрещен');
} else{
    alert('Доступ разрешен');
}*/


/*
const isUserReady = confirm('Ты готов?');

if (isUserReady) {
    console.log('Начинаем!');
} else {
    console.log('Ладно, подождем...');
}*/

const userAge = +prompt('Сколько вам лет?');

/*
switch (userAge){
    case 0: {
        console.log('Такого возраста не бывает');
        break;
    }
    case 18: {
        console.log('Вы достаточнро взрослый');
        break;
    }
    case 1000: {
        console.log('Вы что, вампир?');
        break;
    }
    default:{
        console.log(`Твой возраст ${userAge}`);
    }
}
*/


switch (true){
    case userAge < 1: {
        console.log('Такого возраста не бывает');
        break;
    }
    case userAge === 18: {
        console.log('Не верю, покажи паспорт');
        break;
    }
    case userAge > 0 && userAge <=125 && userAge !== 18: {
        console.log('Вы достаточно взрослый?');
        break;
    }
    case userAge > 125 : {
        console.log('Вы что, вампир?');
        break;
    }
    default:{
        console.log(`Твой возраст ${userAge}`);
    }
}
