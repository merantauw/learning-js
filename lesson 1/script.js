function fun1() {
    var checkbox = document.getElementById('one');

//проверка элемента проверяется состоянием checked
    if (checkbox.checked) {
        alert('Выбран');
    } else {
        alert('Не выбран');
    }
}


const radio = document.getElementsByName('r1');
const button = document.querySelector('[data-check]');

button.addEventListener('click', checkRadioButtons);

function checkRadioButtons() {
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Выбран ' + i + ' элемент!');
        }
    }
}

function calculate() {
    var range = document.getElementById('range');
    var text = document.getElementById('text');
    text.innerHTML = range.value;
}

function checkVariants() {
    var radio = document.getElementsByName('variants');
    var text = document.getElementById('radio-text');
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            text.innerHTML = 'Выбран вариант ' + (i + 1) + ' со значением: ' + radio[i].value;
        }
    }
}