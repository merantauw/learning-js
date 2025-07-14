function changeBorderRadius(){
    var rtl = document.getElementById('rtl').value;
    var ttl = document.getElementById('ttl');
    var rtr = document.getElementById('rtr').value;
    var ttr = document.getElementById('ttr');
    var rbr = document.getElementById('rbr').value;
    var tbr = document.getElementById('tbr');
    var rbl = document.getElementById('rbl').value;
    var tbl = document.getElementById('tbl');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl+'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}