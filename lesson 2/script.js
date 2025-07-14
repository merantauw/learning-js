function fun1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
}

/*
function calculate() {
    var range = document.getElementById('range');
    var text = document.getElementById('text');
    text.innerHTML = range.value;
}*/


/*
function calculate(){
    var range = document.getElementById('range');
    var text = document.getElementById('i1');
    i1.value = range.value;
}*/

function calculate(){
    var range = document.getElementById('range');
    var div = document.getElementById('test');
    div.style.width = range.value+'px';
}
